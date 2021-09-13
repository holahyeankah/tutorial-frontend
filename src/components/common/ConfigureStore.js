import {setCurrentUser} from '../../actions/LoginAction'
import {logoutCurrentUser} from '../../actions/LogoutAction';
import jwt from 'jsonwebtoken'

const configureStore=(store)=>{
    const token=localStorage.getItem("access-token")

    if(token){
        const DecodedToken=jwt.decode(token)
        try{
            const isExpired = (DecodedToken.exp <(Date.now()/1000));
            
            if(!isExpired){
                store.dispatch(setCurrentUser(DecodedToken))
            } 
            else{
                store.dispatch(logoutCurrentUser())
            }
              
        } 
        catch(error){
            store.dispatch(logoutCurrentUser())
    
        }
    }
    
}
export default configureStore