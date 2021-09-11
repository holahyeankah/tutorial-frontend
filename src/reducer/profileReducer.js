import {GET_PROFILE, GET_PROFILE_FAIL, DELETE_ERROR_MESSAGE,  UPDATE_PROFILE, UPDATE_PROFILE_FAIL} from '../actions/type';

const initialState={
    profile:{},
    updatedProfile:{},
    error:{}
};

const profileReducer=(state=initialState, action)=>{
    const{type, profile, error} =action
    switch(type){
        case GET_PROFILE:
            return {
                ...state,
                   profile
            }
            case GET_PROFILE_FAIL:
                return{
                    ...state,
                    error

                }
                case UPDATE_PROFILE:
                return{
                    ...state,
                   updatedProfile: profile              

                }
                case UPDATE_PROFILE_FAIL:
                return{
                    ...state,
                    error
                  

                }
               
                case DELETE_ERROR_MESSAGE:
                    return{                                             
                        error:{}    
                    }
            
        default:
            return state
    }
    
}

export default profileReducer