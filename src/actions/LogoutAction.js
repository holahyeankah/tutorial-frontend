import {LOGOUT_USER} from '../actions/type';

export const logoutUser=()=>({
    type:LOGOUT_USER
})

export const logoutCurrentUser=()=>(dispatch)=>{
    localStorage.removeItem("secret")
    dispatch(logoutUser({}))
}

