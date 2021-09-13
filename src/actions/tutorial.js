import {CREATE_TUTORIAL, CREATE_TUTORIAL_FAIL,  RETRIEVE_TUTORIAL_FAIL, RETRIEVE_ONE_TUTORIAL, RETRIEVE_ONE_TUTORIAL_FAIL,
RETRIEVE_TUTORIAL, UPDATE_TUTORIAL, UPDATE_TUTORIAL_FAIL, DELETE_ERROR_MESSAGE, DELETE_TUTORIAL, DELETE_TUTORIAL_FAIL} from './type';
import  TutorialDataService from '../services/service';
import toastr from 'toastr';

export const createTutorial=(tutorial)=>({
    type: CREATE_TUTORIAL,
    tutorial
})
 export const createTutorialFail=(error)=>({
     type: CREATE_TUTORIAL_FAIL,
     error
 });

 export const deleteErrorMessage=()=>({
    type:DELETE_ERROR_MESSAGE,
          
})

 
export const Tutorial =(tutorial)=> (dispatch)=>{
        return TutorialDataService.post(tutorial)
        .then(res=>{
           const {message}= res.data            
               dispatch(createTutorial(tutorial));
                 toastr.success(message);
               
               return res
                   
               }).catch(error=>{  
                   
                   dispatch(createTutorialFail(error.response))   
                
                })                    
                     
               }
 

export const retrieveTutorial =()=> (dispatch)=>{
  return TutorialDataService.getAll()
  .then(res=>{
      dispatch({
          type:RETRIEVE_TUTORIAL,
          payload:res.data.tutorials,
      })
      return res
  }).catch(error=>{
      dispatch({
          type:RETRIEVE_TUTORIAL_FAIL,
          error:error.response

      })
  })
}
        

export const updateTutorial =(id, data)=> (dispatch)=>{
    return TutorialDataService.update(id, data)
    .then(res=>{
        dispatch({
            type:UPDATE_TUTORIAL,
            payload:res.data.updatedTutorial.data            
        })
        return res

    })
       .catch(error=>{
            console.log(error)
           dispatch({
               type:UPDATE_TUTORIAL_FAIL,
               error:error.response
           })
       })
              
}

export const removeTutorial =(id)=>(dispatch)=>{
    return TutorialDataService.deleteOne(id)
    .then(res=>{
       
         dispatch({
            type:DELETE_TUTORIAL,
            payload:res.data.message
            
        })       
    }).catch(error=>{
       
        dispatch({
            type:DELETE_TUTORIAL_FAIL,
            error:error.response
        })
    })
}



export const findByTitle =(title)=>(dispatch)=>{
    return TutorialDataService.findByTitle(title)
    .then(res=>{
        dispatch({
            type:RETRIEVE_TUTORIAL,
            payload:res.data.tutorials
        })
        return res


    }).catch(error=>{
        dispatch({
            type:RETRIEVE_TUTORIAL_FAIL,
            error:error.response
        })
    })
          
}
export const findOneTutorial =(id)=>(dispatch)=>{
    return TutorialDataService.get(id)
    .then(res=>{
        dispatch({
            type:RETRIEVE_ONE_TUTORIAL,
            payload:res.data.tutorial
        })
        return res


    }).catch(error=>{
        dispatch({
            type:RETRIEVE_ONE_TUTORIAL_FAIL,
            error:error.response
        })
    })    
   
}