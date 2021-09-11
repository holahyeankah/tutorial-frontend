import { GET_PROFILE , GET_PROFILE_FAIL, UPDATE_PROFILE, UPDATE_PROFILE_FAIL, DELETE_ERROR_MESSAGE} from './type';
import TutorialDataService from '../services/service'



export const deleteErrorMessage=()=>({
    type:DELETE_ERROR_MESSAGE
})

export const getUserProfile=()=>(dispatch)=>{
    return TutorialDataService.getProfile()
    console.log("am called")
    .then(res=>{
        console.log(res)
        dispatch({
            type: GET_PROFILE,
            profile:res.data.profile
        })
        return res
    }).catch(error=>{
        dispatch({
            type:GET_PROFILE_FAIL,
            error:error.response
        })
    })

}

export const updateUserProfile=(profileData)=>(dispatch)=>{
    return TutorialDataService.updateProfile(profileData)
    .then(res=>{
        dispatch({
            type: UPDATE_PROFILE,
            profile:res.data.updatedItem.profile
        })
        return res
    }).catch(error=>{
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            error:error.response
        })
    })

}

