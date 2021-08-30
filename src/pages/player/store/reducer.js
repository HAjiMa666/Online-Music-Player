import { Map } from "immutable"

import {
    GETSONG, GET_SONG_INFO, CURRENTSONGINDEX, PLAY_SEQUENCE, GET_LYRIC
} from "./constatnts"
const defaultState = Map({
    playList: [],
    songInfo: [],
    currentSongIndex: 0,
    playSequence: 0,  //0:顺序 1:随机 2:单曲
    lyrics: [],
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case GETSONG:
            return state.set("playList", action.playList);
        case GET_SONG_INFO:
            return state.set("songInfo", action.songInfo);
        case CURRENTSONGINDEX:
            return state.set("currentSongIndex", action.currentSongIndex);
        case PLAY_SEQUENCE:
            return state.set("playSequence", action.playSequence);
        case GET_LYRIC:
            return state.set("lyrics", action.lyric);
        default:
            return state;
    }
}

export default reducer;