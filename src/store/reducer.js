// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';


import { reducer as recommendReducer } from "../pages/discover/children_Pages/recommend/store";

const zReducer = combineReducers({
    recommend: recommendReducer,
})

export default zReducer