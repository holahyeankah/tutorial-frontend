import React, {Component} from 'react';
import LoginValidation from '../Validations/LoginValidation';
import {connect} from 'react-redux';
import {loginUser} from '../actions/LoginAction';
import TextField from './common/TextField'
import './styles/Login.css';
import Loading from  './common/Loading'

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        isLoading:false,
        errors:{},
            
    }
  }

 
   onSubmitLogin=(event)=>{
   event.preventDefault();
   if(this.isValid()){
    this.setState({errors:{}, isLoading:true})  
   const{login, history,formSubmit}=this.props;
   login(this.state)
   .then((user)=>{
    this.setState({isLoading:false}) 
    if(user){
        formSubmit()

    }
       
   })
}
}
    
   isValid(){
    const {errors, isValid}=LoginValidation.InputValidation(this.state)
    if(!isValid){
        this.setState({errors})
    }
    return isValid

   }

  handleChange=(e)=>{
      const{errors}=this.state
     if(errors[e.target.name]){
        const error=Object.assign({}, errors)
         delete errors[e.target.name]
         this.setState({
             [e.target.name]: e.target.value, error
         })

     }else{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
  }

 

 render(){
    const{email, password,errors, isLoading}=this.state



if(isLoading){
    return <Loading/>
}

     
  return (
     

    <div>
        
       <div className="form-group">
            <label className="email">Email</label>
            <TextField
            error={errors.email}
             type="text"
              className="form-control" 
            id="email" required
             value={email} 
            onChange={this.handleChange}
             field="email"/>       
        </div>
    
        <div className="form-group">
            <label className="input">Password</label>
            <TextField
            error={errors.password}
             type="text"
             className="form-control"
              id="password"
             value={password} 
             onChange={this.handleChange}
              field="password"/>               
        </div>
        
        <div className="submit-button">
        <button id="submit"onClick={this.onSubmitLogin} className="btn btn-success">Login</button>
        </div>   

    </div>

  )
 }
  
}

const mapStateToProps=(state)=>{
    return{
        error:state.auth.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        login:(user)=>dispatch(loginUser(user)),
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Login);
