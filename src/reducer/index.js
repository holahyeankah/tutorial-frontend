import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import tutorialReducer from './tutorialReducer';
import userReducer from './userReducer';

export default combineReducers({
    auth:userReducer,
    profile:profileReducer,
    tutorial:tutorialReducer,
 
})

