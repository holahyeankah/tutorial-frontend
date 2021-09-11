import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tutorial} from '../actions/tutorial';
import {deleteErrorMessage} from  '../actions/LoginAction';
import ErrorAlertNotification from './common/ErrorAlert'
import TutorialValidation from '../Validations/TutorialValidation';
import './styles/AddTutorial.css';
import TextField from './common/TextField'
import Loading from  './common/Loading'

class AddTutorial extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            description:'',
            published:false,
            errors:'',
            isLoading:false,
            isSubmitted:false
        }
    }

  
    handleChange=(e)=>{
        const{errors}=this.state;
       if(errors[e.target.name]){
           const error=Object.assign({}, errors)
           delete errors[e.target.name]
           this.setState({[e.target.name] : e.target.value, error})
       }else{
           this.setState({[e.target.name]: e.target.value})
       }
    }

    onTutorialSubmit=(e)=>{
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{}, isLoading:true})           
        const{Tutorial, history}=this.props;
         Tutorial(this.state)
        .then(()=>{
        this.setState({isLoading:false, isSubmitted: true})
         history.push('/tutorials')
            
        })
    }    

    }
    isValid=()=>{
        const{errors, isValid}=TutorialValidation.InputValidation(this.state)
        if(!isValid){
            this.setState({errors})
        }
        return isValid
    }
    
    handleDelete=()=>{
        const {deleteErrorMessage}=this.props;
        deleteErrorMessage();

    }
   
    render(){
        const{ title, description, isLoading, errors, isSubmitted}=this.state;
        const{error}=this.props;
       

        if(isLoading){
            return <Loading/>
        }

       
        return(
                   <div className= "form-background my-5 mx-auto align-self-center">
                        <div>           
                   
                        <div className="submit-form">
                        <h4 className="tutorial-form">Tutorial form</h4>
                          {error && error.data && error.data.message && 
                         <ErrorAlertNotification errors={error.data.message} onClick={this.handleDelete} />}
                
                        <div className="form-group">
                            <label className="title">Title</label>
                            <TextField 
                            error={errors.title}
                            type="text" 
                            className="form-control" 
                            id="title"
                            value={title} 
                            onChange={this.handleChange} 
                            field="title"/>       
                        </div>
                        
                    
                         <div className="form-group">
                            <label className="input">Description</label>
                            <TextField type="text" 
                            error={errors.description}
                            className="form-control"
                             id="description"
                              value={description} 
                             onChange={this.handleChange}
                            field="description"/>               
                        </div>
                        
                        <div className="submit-button">
                        <button id="submit"onClick={this.onTutorialSubmit} className="btn btn-success">Submit</button>
                        </div>  
                        </div>  
                
                    </div> 
                    </div>              
        
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        error:state.tutorial.error

    }

}

export default connect(mapStateToProps, {Tutorial, deleteErrorMessage})(AddTutorial)