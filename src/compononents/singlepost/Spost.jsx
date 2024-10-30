import { useLoaderData } from "react-router-dom";

const Spost = () => {
    const singpost = useLoaderData();
    const {id,title}=singpost;
    return (
        <div>
          <h2> there is the single details of posts :{id}</h2> 
          <p>Title : {title}</p> 
           
        </div>
    );
};

export default Spost;