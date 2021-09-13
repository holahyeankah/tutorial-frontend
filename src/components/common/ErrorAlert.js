import React from 'react';


const ErrorAlertNotification=({errors, onClick})=>{
   
    return(
        <div className="notification ">
        <div className="alert alert-danger alert-dismissable mt-auto mb-0 fade show" >
            <div className="display">
            
            <div className="mx-auto" type="button"  style={{float:"right"}} data-dismiss="alert" onClick={()=>onClick()}>&times;</div>
             <strong className="text-center mx-auto mb-auto">{errors}</strong>
             </div>
           
            </div>
            </div>
    )

}

export default ErrorAlertNotification