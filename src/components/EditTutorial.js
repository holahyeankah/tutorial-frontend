import React, {Component} from 'react';
import {updateTutorial, removeTutorial, findOneTutorial} from '../actions/tutorial';
import {connect} from "react-redux";
import TextField from './common/TextField'
import './styles/EditTutorial.css';
import Loading from  './common/Loading'


class Edit extends Component{
    constructor(props){
        super(props);
        this.state={
         
                id:'',
                title:'',
                description:'',
                published:false,
                isLoading:true,
                message:'',
                errorMsg:''      
    }
    }

    componentDidMount(){
    const id=this.props.match.params.id
    this.getTutorial(id)
    this.setState({id, isLoading:false})
           
    }

    handleChange=(e)=>{
        const{name, value}=e.target
        this.setState({[name]:value})
    }

   
    
    getTutorial=(id)=>{
     this.props.findOneTutorial(id)
        .then(response=>{
            const {id, title, description,published}=response.data.tutorial
            this.setState({id,title, description,published})

        }).catch(err=>{
            this.setState({ErrorMsg:err})
        })     

    }


    updateStatus=(status)=>{
    this.setState({published:status})
        
    }

    updateContent=()=>{
        const {id, published, title, description}=this.state;
        const data= { published, title, description}  
        this.props.updateTutorial(id, data)
        .then(()=>{
           this.props.history.push("/tutorials")
        }).catch(err=>{
            this.setState({ErrorMsg:err})
        })

    }
    deleteTutorial=()=>{
        const{removeTutorial, history}=this.props;
       removeTutorial(this.state.id)
        .then(()=>{
         history.push("/tutorials")
        })
            .catch(err=>{
            this.setState({ErrorMsg:err})
        })

    }

    render(){
        const {title, description, published}=this.state;
        const{auth}=this.props;

        if(!(title || description)){
            return <Loading/>
        }
    
        return(
            <div className="form-background align-self-center text-center mx-auto mt-5">
                <div className="edit-form">
                    <h4 className="header">Edit form</h4>
                    <form>
                    <div className="form-group">
                            <label className="heading-style" htmlFor="title">Title </label>
                            <TextField 
                            type="text" 
                            className="form-control"
                             id="title" 
                              value={title} 
                              onChange={this.handleChange}
                               field="title"/>
                                
                        </div>
                        <div className="form-group">
                            <label className="heading-style"htmlFor="description">Description </label>
                            <textarea
                             type="text"
                             className="form-control" 
                             id="description" 
                              value={description} 
                              onChange={this.handleChange}
                               name="description">
                                </textarea>
                                
                        </div>
                        <div className="status">
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {published ? "Published" : "Pending"}
                        </div>

                    </form>
                    <div className=" mt-4 mb-4 d-flex justify-content-between">
                    {published ? (
                        <button disabled={!auth} className="btn btn-sm btn-secondary" onClick={()=>this.updateStatus(false)}>
             Unpublished                   
                        </button>
                    ) :(<div>

<button disabled={!auth} className="btn btn-sm btn-secondary" id="publish" onClick={()=>this.updateStatus(true)}>
             Published                   
                        </button>
                    </div>)}
                    
                    <button disabled={!auth} className="btn btn-sm btn-danger"  onClick={this.deleteTutorial}> Delete </button>
                    
                    <button disabled={!auth} className="btn btn-sm btn-success" onClick={this.updateContent}> Update </button> 
                    </div>
                 
                </div>

            </div>
    
        )
    }
}
const mapStateToProps=(state)=>({
    auth:state.auth.isAuthenticated
})
export default connect (mapStateToProps, {updateTutorial, removeTutorial, findOneTutorial})(Edit)