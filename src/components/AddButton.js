import {Link} from 'react-router-dom';

const AddButton=({auth})=>{
    return(
        <div className="col-md-6">
            {auth ? <Link to ={'/add'}>
            <button disabled={!auth} className="btn btn-outline-secondary" >
Add tutorial
            </button>
            </Link>: null}

        </div>
    )
}


export default AddButton