import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import AddButton from './AddButton';
import { retrieveTutorial, findByTitle } from '../actions/tutorial'

class TutorialList extends Component{
    constructor(props){
        super(props);
        this.state={
            currentTutorial:null,
            currentIndex:-1,
            searchTitle:''
        }
    }
    componentDidMount(){
        this.props.retrieveTutorial()
    }

    onSearchTitle=(e)=>{
       const searchTitle=e.target.value
        this.setState({searchTitle})
    }

    refreshData=()=>{
        this.setState({
        currentTutorial:null,
        currentIndex:-1,
        })
        
    }

    setActiveTutorial=(tutorial, index)=>{
        this.setState({
            currentTutorial:tutorial,
            currentIndex:index
        })

    }
   
    findTitle=()=>{
        const{findByTitle}=this.props;
        this.refreshData()
       findByTitle(this.state.searchTitle)
        
    }
    render(){
        const {currentTutorial, currentIndex, searchTitle} =this.state;
        const {tutorials, auth}=this.props;
        
        
        return(
            
            <div className="list-row ">
                <div className="col-md-6 mx-3">
                    <h2 className="fs-4 mt-3 align-self-center mx-auto text-center">Litle Saint International College Offa. Kwara state.</h2>
                    <div className="input-group mx-5 my-5">
                        <input type="text" className="form-control  text-center" placeholder="search by title" 
                        value={searchTitle} onChange={this.onSearchTitle}/>
                        
<div className="input-group-append">
    <button  type="button" className="bg-light p-3" onClick={this.findTitle}>
     search
    </button>

</div>
  </div>
   </div>
   <div className="col-md-7">
  {auth ? <AddButton/> : <h6> Login to add tutorial</h6>}
 <h4 className="m-3 fs-3 text-center">{tutorials && tutorials.length > 0 ? "Tutorial List" :"No Tutorial Found "}</h4>
 <ul className="list-group">
 {tutorials && tutorials.length > 0 && tutorials.map((tutorial, index)=>(
  <li className={"list-group-item" + (index ===currentIndex ? "active" :"") } onClick={()=>this.setActiveTutorial(tutorial, index)} key={tutorial.id}>
                   <h5 > {tutorial.title}</h5> 
                    </li>    ))}
        </ul>
        </div>
         <div className="col-md-6">
         {currentTutorial ? (
        <div className="text-center">
         <h3 className="mt-5 fs-3">Tutorial</h3>
                        
         <div className="fs-5">
          <label >
         <strong className="fs-4">Title:</strong>
        </label>{" "}
        {currentTutorial.title}
             </div>
             <div  className="fs-5">
             <label>
              <strong className=" fs-4">Description:</strong>
                  </label>{" "}
                    {currentTutorial.description}
                        </div>
                      <div  className="fs-5">
                     <label>
                     <strong className="fs-4">Publish status:</strong>
                     </label>{" "}
                   {currentTutorial.published ? "Published" : "Pending"}
                  </div>
                        
                    <Link disabled={!auth} to={`/tutorial/${currentTutorial.id}`} className="badge badge-warning">
                
                      <button  className=" m-2 btn btn-md btn-warning"> 
                       Edit 
                        </button>                        
                        </Link>
                      

                    </div>) :(<div>
                        <br/>
                        <h5 className=" mt-3 text-start">{tutorials && tutorials.length > 0 && <p>Please click on a tutorial</p>}</h5>
                       </div> )}
                    
                </div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.auth.isAuthenticated,
        tutorials:state.tutorial.payload
    }
}
export default connect (mapStateToProps, {retrieveTutorial, findByTitle}) (TutorialList)