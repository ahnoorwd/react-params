import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;
    const navigate =useNavigate();
    const poststyle={
        border:"2px solid red",
        padding:"5px",
        borderRadius:"20px",
        marginBottom:'5px'
    }
    const clickhandle=()=>{
        navigate(`/user/${id}`);
    }
    return (
        <div style={poststyle}>
            <h3>post of id :{id}</h3>
            <p>post of title :{title}</p>
            <Link to = {`/user/${id}`}>post detail </Link>
            <Link to = {`/user/${id}`}><button>Show More</button></Link>
            <div>
            <button  onClick={clickhandle}>Click here </button>

            </div>
        </div>
    );
};

export default Post;
