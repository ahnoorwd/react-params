import { useLoaderData } from "react-router-dom";

const Spost = () => {
    const singpost = useLoaderData();
    const {id,title,body}=singpost;
    return (
        <div>
          <h2> there is the single details of posts :{id}</h2> 
          <p>Title : {title}</p> 
          <p><small>{body}</small></p> 
        </div>
    );
};

export default Spost;