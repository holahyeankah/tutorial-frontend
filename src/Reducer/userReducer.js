import {SET_CURRENT_USER, SET_CURRENT_USER_FAIL, SIGN_UP_ERROR, LOGOUT_USER, DELETE_ERROR_MESSAGE} from '../actions/type';

const initialState={
    isAuthenticated:false,
    user:{},
    error:{}
};

const userReducer=(state=initialState, action)=>{
    const{type, user, error} =action
    switch(type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:true,
                   user
            }
            
                case SET_CURRENT_USER_FAIL:
                return{
                    ...state,
                    isAuthenticated:false,
                    error

                }
                case SIGN_UP_ERROR:
                return{
                    ...state,
                    isAuthenticated:false,
                    error

                }
                case DELETE_ERROR_MESSAGE:
                    return{                                             
                        error:{}
    
                    }
                case LOGOUT_USER:
                    return{
                        ...state,
                        ...initialState
                    }

        default:
            return state
    }
    
}

export default userReducer