import React, {Component} from 'react';
import SignUpInputValidation from '../Validations/SignupValidation';
import {connect} from 'react-redux';
import {registerUser, deleteErrorMessage} from '../actions/SignupAction';
import TextField from './common/TextField'
import './styles/Register.css';
import Loading from  './common/Loading'

class Register extends Component{
  constructor(props){
    super(props);
    this.state={
       fullname:'',
        email:'',
        password:'',
        password_confirmation:'',
        isLoading:false,
        errors:'',
       
     
      
    }
  }

   registerUser=(event)=>{
   event.preventDefault();
   if(this.isValid()){
    this.setState({errors:'', isLoading:true})   
   const{signUp, formSubmit}=this.props;
   signUp(this.state)
   .then((data)=>{
    this.setState({isLoading:false,})
    if(data){
    formSubmit()
    

    }
       
   })
}
  
   
   }
   isValid(){
    const {errors, isValid}=SignUpInputValidation.InputValidation(this.state)
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
    const{fullname ,email, password, password_confirmation, errors, isLoading}=this.state
    console.log(this.state)



if(isLoading){
    return <Loading/>
}

     
  return (

    <div>   
         <div className="form-group">
            <label className="fullname">Fullname</label>
            <TextField
            error={errors.fullname}
             type="text"
             className="form-control"
            id="fullname"
             value={fullname}
            onChange={this.handleChange}
             field="fullname"/>            
        </div>

        <div className="form-group">
            <label className="input">Email</label>
            <TextField 
            error={errors.email}
            type="email" 
            className="form-control" 
            id="email"
              value={email} 
              placeholder="Enter valid email"
            onChange={this.handleChange} 
            field="email"/>       
        </div>
        
        <div className="form-group">
            <label className="input">Password</label>
            <TextField            
            error={errors.password}
             type="password"
             autocomplete="password"
             className="form-control"
              id="password"
             value={password} 
             onChange={this.handleChange} 
             field="password"/>               
        </div>
       
        <div className="form-group">
            <label className="input">Password confirmation</label>
            <TextField           
           error={errors.password_confirmation}
            type="password"
             className="form-control"
              id="password_confirmation"
            value={password_confirmation} 
             onChange={this.handleChange} 
             field="password_confirmation"/>               
        </div>

        <div className="submit-button">
        <button id="submit"onClick={this.registerUser} className="btn btn-success mb-0">Submit</button>
        </div>   
</div>


)
  

 }
  
}



const mapDispatchToProps=(dispatch)=>{
    return{
        signUp:(user)=>dispatch(registerUser(user)),
        deleteErrorMessage:()=>dispatch(deleteErrorMessage())
    }
}
export default connect(null, mapDispatchToProps) (Register);
