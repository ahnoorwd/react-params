import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
   const userr= useLoaderData();
   const {name,id}=userr;
    return (
        <div>
          <h3>There is  the info of user: {name}</h3>  
          <h3>it&apos;s is user id number: {id}</h3>  
        </div>
    );
};

export default UserDetails;