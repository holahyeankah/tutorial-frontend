import {combineReducers} from "redux";
import userReducer from './userReducer';
import tutorialReducer from './tutorialReducer';


export default combineReducers({
    auth:userReducer,
    tutorial:tutorialReducer,
 
})

