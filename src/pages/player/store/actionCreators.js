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
        const localPlayList = JSON.parse(localStorage.getItem("songInfo"));
        const songInfo = getState().getIn(["player", "songInfo"]);
        let songIndex = -1;
        let newSongInfo = [];
        if (localPlayList === null) {
            songIndex = songInfo.findIndex(item => item.id === id);
            newSongInfo = [...songInfo];
        } else {
            songIndex = localPlayList.findIndex(item => item.id === id);
            newSongInfo = [...localPlayList];
        }

        requestSongDetail(id).then(res => {
            if (songIndex === -1) {
                newSongInfo.push(res.data.songs[0]);
                localStorage.setItem("songInfo", JSON.stringify(newSongInfo));
                dispatch(changeCurrentSongIndexAction(newSongInfo.length - 1));
                dispatch(changeSongInfo(newSongInfo))
            } else {
                dispatch(changeCurrentSongIndexAction(songIndex));
                dispatch(changeSongInfo(newSongInfo))
            }
        })
    }
}

const getSongUrl = (id) => {
    return (dispatch, getState) => {
        const localPlayList = JSON.parse(localStorage.getItem("playList"));
        const playList = getState().getIn(["player", "playList"]);
        let newPlayList = [];
        let songIndex = 0;
        if (localPlayList === null) {
            newPlayList = [...playList];
            songIndex = newPlayList.findIndex(item => item[0].id === id)
        } else {
            newPlayList = [...localPlayList];
            songIndex = newPlayList.findIndex(item => item[0].id === id);
        }
        if (songIndex === -1) {//说明没有找到相对应歌曲id,将新歌加入playlist
            requestSongUrl(id).then(res => {
                newPlayList.push(res.data.data);
                localStorage.setItem("playList", JSON.stringify(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeSong(newPlayList))
            })
        } else {//找到了歌曲Id,不需要计入,直接进行派发
            dispatch(changeCurrentSongIndexAction(songIndex));
            dispatch(changeSong(newPlayList))
        }
    }
}

const getSongLyric = (id) => {
    return (dispatch, getState) => {
        const lyrics = getState().getIn(["player", "lyrics"]);
        const songInfo = getState().getIn(["player", "songInfo"]);
        const newLyrics = [...lyrics];
        const songIndex = songInfo.findIndex(item => item.id === id);
        requestLyric(id).then(res => {
            if (songIndex === -1) {
                newLyrics.push(res.data.lrc.lyric);
                dispatch(changeLyricAction(newLyrics));
            } else {
                dispatch(changeLyricAction(newLyrics));
            }
        })
    }
}

const showlocalSongData = () => {
    return (dispatch) => {
        const songInfo = JSON.parse(localStorage.getItem("songInfo"));
        dispatch(changeSongInfo(songInfo));
        dispatch(changeSong(JSON.parse(localStorage.getItem("playList"))));
        const newLyrics = [];
        songInfo.map(item => {
            requestLyric(item.id).then(res => {
                newLyrics.push(res.data.lrc.lyric);
                dispatch(changeLyricAction(newLyrics));
            })
            return null;
        })
    }
}

const removeAllSongInfo = () => {
    return (dispatch) => {
        dispatch(changeSongInfo([]));
        dispatch(changeSong([]));
        dispatch(changeLyricAction([]));
    }
}

const removeSong = (id) => {
    return (dispatch, getState) => {
        const lyrics = getState().getIn(["player", "lyrics"]);
        const songInfo = getState().getIn(["player", "songInfo"]);
        const playList = getState().getIn(["player", "playList"]);
        let lyricID = 0;
        const newSongInfo = songInfo.filter((item, index) => {
            if (item.id === id)
                lyricID = index;
            if (item.id !== id)
                return item;
            return null;

        });
        const newPlayList = playList.filter(item => {
            if (item[0].id !== id)
                return item;
            return null;
        });
        const newLyrics = lyrics.filter((item, index) => {
            if (index !== lyricID)
                return item;
            return null;
        })
        dispatch(changeSongInfo(newSongInfo));
        dispatch(changeSong(newPlayList));
        dispatch(changeLyricAction(newLyrics));
        localStorage.setItem("songInfo", JSON.stringify(newSongInfo));
        localStorage.setItem("playList", JSON.stringify(newPlayList));
    }
}




export {
    getSongUrl,
    getSongDetail,
    getSongLyric,
    changePlaySequenceAction,
    changeCurrentSongIndexAction,
    removeAllSongInfo,
    removeSong,
    showlocalSongData,
}