import {
    requestSongUrl,
    requestSongDetail,
    requestLyric,
} from "../../../service/player"

import * as actionType from "./constatnts"


const changeSongInfo = (songInfo) => ({
    type: actionType.GET_SONG_INFO,
    songInfo
})
const changeSong = (playList) => ({
    type: actionType.GETSONG,
    playList,
})
const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionType.CURRENTSONGINDEX,
    currentSongIndex,
})
const changePlaySequenceAction = (playSequence) => ({
    type: actionType.PLAY_SEQUENCE,
    playSequence,
})
const changeLyricAction = (lyric) => ({
    type: actionType.GET_LYRIC,
    lyric,
})


const getSongDetail = (id) => {
    return (dispatch, getState) => {
        const songInfo = getState().getIn(["player", "songInfo"]);
        const lyrics = getState().getIn(["player", "lyrics"]);
        const songIndex = songInfo.findIndex(item => item.id === id);
        const newSongInfo = [...songInfo];
        const newLyrics = [...lyrics];
        requestSongDetail(id).then(res => {
            if (songIndex === -1) {
                newSongInfo.push(res.data.songs[0]);
                dispatch(changeSongInfo(newSongInfo))
            } else {
                dispatch(changeSongInfo(newSongInfo))
            }
        })
        requestLyric(id).then(res => {
            if (songIndex === -1) {
                newLyrics.push(res.data.lrc.lyric);
                dispatch(changeLyricAction(newLyrics))
            } else {
                dispatch(changeLyricAction(newLyrics));
            }
        })
    }
}

const getSongUrl = (id) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"]);
        const newPlayList = [...playList];
        const songIndex = newPlayList.findIndex(item => item[0].id === id)
        if (songIndex === -1) {//说明没有找到相对应歌曲id,将新歌加入playlist
            requestSongUrl(id).then(res => {
                newPlayList.push(res.data.data);
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeSong(newPlayList))
            })
        } else {//找到了歌曲Id,不需要计入,直接进行派发
            dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(changeSong(newPlayList))
        }
    }
}




export {
    getSongUrl,
    getSongDetail,
    changePlaySequenceAction,
    changeCurrentSongIndexAction,
}