import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
   const userr= useLoaderData();
   const navigate = useNavigate();
   const {id,username}=userr;
   console.log(userr);


   const hanndleofgoback=()=>{
    navigate(-1)
   }
    return (
        <div>
          <h3>serial number of user: {id}</h3>  
          <h4>Name of the user: {username}</h4>  
           <button onClick={hanndleofgoback}>Go back</button>
        </div>
    );
};

export default UserDetails;