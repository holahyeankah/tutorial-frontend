import {CREATE_USER, CREATE_USER_FAIL,SET_CURRENT_USER, SET_CURRENT_USER_FAIL, LOGOUT_USER, DELETE_ERROR_MESSAGE} from '../actions/type';

const initialState={
    isAuthenticated:false,
    data:{},
    user:{},
    error:{}
};

const userReducer=(state=initialState, action)=>{
    const{type, user, data, error} =action
    switch(type){
        case CREATE_USER:
            return {
                ...state,
                   data
            }
            case CREATE_USER_FAIL:
                return{
                    ...state,
                    data:{},
                    error

                }
                case SET_CURRENT_USER:
                return{
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