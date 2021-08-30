// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';


import { reducer as recommendReducer } from "../pages/discover/children_Pages/recommend/store";
import { reducer as songPlayer } from "../pages/player/store";

const zReducer = combineReducers({
    recommend: recommendReducer,
    player: songPlayer,
})

export default zReducer