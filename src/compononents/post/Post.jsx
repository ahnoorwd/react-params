import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post;

    const poststyle={
        border:"2px solid red",
        padding:"5px",
        borderRadius:"20px",
        marginBottom:'5px'
    }
    return (
        <div style={poststyle}>
            <h3>post of id :{id}</h3>
            <p>post of title :{title}</p>
            <Link to = {`/user/${id}`}>more detail </Link>
        </div>
    );
};

export default Post;
