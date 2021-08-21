
import { Map } from "immutable"

import {
    CHANGE_BANNERS,
    CHANGE_SONGCARD,
    CHANGE_NEWALBUM,
    GET_ALLRANK,
    NEW_RANK,
    UP_RANK,
    ORIGINAL_RANK
} from "./constants"

// 在这里对状态进行初始化
const initialState = Map({
    topBanners: [],
    songCards: [],
    newAlbums: [],
    allRank: [],
    newRank: [],
    upRank: [],
    originalRank: [],
})

// 这里将状态和行为进行一个关联
function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_BANNERS:
            return state.set("topBanners", action.topBanners);
        case CHANGE_SONGCARD:
            return state.set("songCards", action.songCards);
        case CHANGE_NEWALBUM:
            return state.set("newAlbums", action.newAlbums);
        case GET_ALLRANK:
            return state.set("allRank", action.allRank);
        case UP_RANK:
            return state.set("upRank", action.upRank);
        case ORIGINAL_RANK:
            return state.set("originalRank", action.originalRank);
        case NEW_RANK:
            return state.set("newRank", action.newRank);
        default:
            return state;
    }
}

export {
    reducer
};