import {Link} from 'react-router-dom';

const AddButton=()=>{
    return(
        <div className="col-md-6">
            <Link to ={'/add'}>
            <button className="btn btn-outline-secondary" >
Add tutorial
            </button>
            </Link>

        </div>
    )
}

export default AddButton