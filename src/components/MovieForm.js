import { useParams,useNavigate } from "react-router-dom";

const MovieForm = (props)=>{

const {id}= useParams();
const history= useNavigate();

    
return <div>
    <h1>Movie Form {id}
</h1>
<button className="btn btn-primary" onClick={()=>history('/movies',{replace:true})}>Save</button>
    </div>
}
export default MovieForm