import React from 'react'
import loader from '../../images/Rainbow.gif'
import './Loading.css'


const Loading=()=>(
    <div clasName="row d-flex justify-content-center ">
        <div className="col-md-12 align-self-center  text-center">
            <img src={loader} className="text  mx-auto" alt="loading"/>

        </div>
      
    </div> 
)

export default Loading