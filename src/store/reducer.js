// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';


import { reducer as recommendReducer } from "../pages/discover/children_Pages/recommend/store";
import { reducer as songPlayer } from "../pages/player/store";
import { reducer as albumReducer } from "../pages/discover/children_Pages/album/store"

const zReducer = combineReducers({
    recommend: recommendReducer,
    player: songPlayer,
    album: albumReducer,
})

export default zReducer