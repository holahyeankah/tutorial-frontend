import React from 'react';


const ErrorAlertNotification=({errors, onClick})=>{
   
    return(
        <div className="notification">
        <div className="alert alert-danger alert-dismissable fade show" >
            <div className="display">
            
            <div type="button"  style={{float:"right"}} data-dismiss="alert" onClick={()=>onClick()}>&times;</div>
             <strong className="text-center">{errors}</strong>
             </div>
           
            </div>
            </div>
    )

}

export default ErrorAlertNotification