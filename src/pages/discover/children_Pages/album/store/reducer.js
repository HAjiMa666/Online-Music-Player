import { Map } from "immutable";
import {
    GETALLALBUM,
    GETHOTALBUM
} from "./constants"
const defaultValue = Map({
    hotAlbum: [],
    allAlbum: [],
})

const reducer = (state = defaultValue, action) => {
    switch (action.type) {
        case GETALLALBUM:
            return state.set("allAlbum", action.allAlbum);
        case GETHOTALBUM:
            return state.set("hotAlbum", action.hotAlbum);
        default:
            return state;
    }
};


export default reducer;