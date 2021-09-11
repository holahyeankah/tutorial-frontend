import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Modal  from 'react-modal'; 
import ErrorAlertNotification from './common/ErrorAlert'
import Register from './Register';
import {deleteErrorMessage} from '../actions/SignupAction';
import {logoutCurrentUser} from '../actions/LogoutAction'
import Login from './Login';
import './styles/Navbar.css'



class  Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
          register:false,
          login:false
        
    }
  }

  showRegisterModal=()=>{
    this.setState({register:true})
  };

  showLoginModal=()=>{
    this.setState({login:true})
  }

 

  registerSubmit=()=>{
    this.setState({register:false})
  }

  loginSubmit=()=>{
    this.setState({login:false})
  }


  logout=(event)=>{
    const {logoutCurrentUser}=this.props;
    event.preventDefault();
    logoutCurrentUser()
  

  }


  handleDelete=()=>{
    const {deleteErrorMessage}=this.props;
    deleteErrorMessage()
}
  
  

    render(){
    const {register, login}=this.state;
    const{error, auth}=this.props; 

      
        return(
          <div>
          
        
{!auth ?

(
  <div className="d-flex navbar navbar-expand  justify-content-between bg-dark ">
    <Link to={"/tutorials"} className=" text-white fs-5 px-4 text-decoration-none" >
       Home
    </Link>
  <div className=" bg-dark margin fs-5 text-white" onClick={this.showRegisterModal}>Register</div> 
     <div className="bg-dark text-white px-4 fs-5" onClick={this.showLoginModal}>Login</div> 
  </div>
        
         ) :(<div className="d-flex navbar navbar-expand  justify-content-between bg-dark ">
         <Link to={"/tutorials"} className=" text-white fs-5 px-4  text-decoration-none" >
            Home
         </Link>
       
          <div className="bg-dark fs-5 px-4 text-white"  onClick={this.logout}>Logout</div> 
       </div>)
       
       }
       
  <div>
       <Modal
       isOpen={register}
       contentLabel="selected option"
       onRequestClose={this.registerSubmit}
       ariaHideApp={false}
       className=""
       closeTimeoutMS={200}
       >
<div className="row">
  <div className="col-md-12 d-flex  justify-content-center">

    <div className="text-center mx-5 ">
      <div className=" card bg mt-5 d-flex  justify-content-center align-self-center width p-5">
      <h4 className="mx-auto my-auto">Registration form</h4>
      {error && error.data && error.data.message  ? 
         <ErrorAlertNotification errors={error.data.message} onClick={this.handleDelete} /> : ""}
  <Register  formSubmit={this.registerSubmit}/>
  </div>
  </div>
  </div>

</div>

       </Modal>
       </div> 
       <div> 
       <Modal
       isOpen={login}
       contentLabel="selected option"
       onRequestClose={this.loginSubmit}
       ariaHideApp={false}
       className=""
       closeTimeoutMS={200}
       >
<div className="row">
  <div className="col-md-12 d-flex  justify-content-center">

    <div className="text-center mx-5 ">
      <div className=" card bg  mt-5 d-flex  width p-5">
      <h4 className="mx-auto mb-3">Login form</h4>
      {error && error.data && error.data.message  ? 
         <ErrorAlertNotification errors={error.data.message} onClick={this.handleDelete} /> : ""}
  <Login  formSubmit={this.loginSubmit}/>
  </div>
  </div>
  </div>

</div>

       </Modal>
       </div> 

      
    
       </div>
      
           
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.auth.isAuthenticated,
      error:state.auth.error
  }
}

export default connect(mapStateToProps, {deleteErrorMessage, logoutCurrentUser}) (Navbar)