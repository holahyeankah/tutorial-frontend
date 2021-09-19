import {RETRIEVE_TUTORIAL, RETRIEVE_TUTORIAL_FAIL, RETRIEVE_ONE_TUTORIAL, RETRIEVE_ONE_TUTORIAL_FAIL,UPDATE_TUTORIAL,
UPDATE_TUTORIAL_FAIL, DELETE_TUTORIAL,DELETE_TUTORIAL_FAIL, DELETE_ALL_TUTORIAL, DELETE_ERROR_MESSAGE} from '../actions/type';
 
const initialState={
    error:{},
    payload:[]
}
export const tutorialReducer=(state=initialState, action)=>{
    const {type, error, payload}=action
    switch(type){
       
            case RETRIEVE_TUTORIAL:
                return {
                    ...state,
                    payload,
                   
                }

                case RETRIEVE_TUTORIAL_FAIL:
                    return error;

                    case RETRIEVE_ONE_TUTORIAL:
                        return{
                            ...state,
                            payload

                        };
                        case RETRIEVE_ONE_TUTORIAL_FAIL:
                            return{
                                ...state,
                                error
                            }

                case UPDATE_TUTORIAL:
                    return state.payload.length > 0 && state.payload.map(item=>{
                        if(item.id ===payload.id){
                            return{
                                ...item,
                                ...payload
                            } 
                            }else{
                                return item
                        }
                    })
                    case UPDATE_TUTORIAL_FAIL:
                        return error;

                    case DELETE_TUTORIAL:
                        return state.payload.filter(item=>item.id !== payload)
                        
                        case DELETE_TUTORIAL_FAIL:
                            return error;

                            case DELETE_ERROR_MESSAGE:
                                return{
                                    error:{}
                                }

            default:
                return state;
    }
   
}

export default tutorialReducer