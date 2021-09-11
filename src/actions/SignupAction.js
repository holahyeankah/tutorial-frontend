import dotenv from 'dotenv'
import {CREATE_USER, CREATE_USER_FAIL, LOGOUT_USER,  DELETE_ERROR_MESSAGE} from './type';
import TutorialDataService from '../services/service';
import jwt from 'jsonwebtoken';
import toastr from 'toastr'
require('dotenv').config();

export const createUser=(data)=>({
    type:CREATE_USER,
      data
    
})

export const createUserFail=(error)=>({
    type:CREATE_USER_FAIL,
      error
    
})
export const deleteErrorMessage=()=>({
    type:DELETE_ERROR_MESSAGE,
      
    
})

export const registerUser=(data)=> (dispatch)=>{

return TutorialDataService.create(data)
.then(res=>{
   
const {message}= res.data;
toastr.success(message);
dispatch(createUser(data));

return true
    
}).catch(error=>{  
    dispatch(createUserFail(error.response))   
 
 })
       
      
}


export const logout=()=>({
    type: LOGOUT_USER
})

export const logoutUser=()=>(dispatch)=>{
    localStorage.removeItem('user-token')
    dispatch(logout({}))


}
