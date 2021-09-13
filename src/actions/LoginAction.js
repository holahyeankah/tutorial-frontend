
import {SET_CURRENT_USER, SET_CURRENT_USER_FAIL, DELETE_ERROR_MESSAGE} from './type';
import TutorialDataService from '../services/service';
import jwt from 'jsonwebtoken';
import toastr from 'toastr'


export const setCurrentUser=(user)=>({
    type:SET_CURRENT_USER,
        user   
})

export const setCurrentUserFail=(error)=>({
    type: SET_CURRENT_USER_FAIL,
      error
    
})

export const deleteErrorMessage=()=>({
    type:DELETE_ERROR_MESSAGE,
      
    
})

export const loginUser=(user)=> (dispatch)=>{
 return TutorialDataService.login(user)
 .then(res=>{
    const {message}= res.data;
    const {token}= res.data.user;
     localStorage.setItem("access-token", token);
     toastr.success(message);
     dispatch(setCurrentUser(jwt.decode(token)));
     return true
            
        }).catch(error=>{  
            dispatch(setCurrentUserFail(error.response))   
         
         })
               
              
        }
