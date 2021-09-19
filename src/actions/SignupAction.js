import {SET_CURRENT_USER, SIGN_UP_ERROR,  DELETE_ERROR_MESSAGE} from './type';
import TutorialDataService from '../services/service';
import jwt from 'jsonwebtoken';
import toastr from 'toastr'


export const setCurrentUser=(user)=>({
    type:SET_CURRENT_USER,
      user
    
})

export const signUpError=(error)=>({
    type:SIGN_UP_ERROR,
      error
    
})
export const deleteErrorMessage=()=>({
    type:DELETE_ERROR_MESSAGE,
      
    
})

export const registerUser=(user)=> (dispatch)=>{

return TutorialDataService.create(user)
.then(res=>{ 
const {message}= res.data;
const{token}=res.data;
localStorage.setItem("secret", token);
toastr.success(message);
dispatch(setCurrentUser(jwt.decode(token)));

return true
    
}).catch(error=>{  
    dispatch(signUpError(error.response))   
 
 })
       
      
}


