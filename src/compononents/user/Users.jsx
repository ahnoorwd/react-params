import { useLoaderData } from "react-router-dom";
import Alluser from "../alluser/Alluser";
import'./user.css';
const Users = () => {
    const user  = useLoaderData();
    return (
        <div>
          <h3>our happy user&apos;s:{user.length}</h3>
          <div className="users">
            {
              user.map(userr=><Alluser key={userr.id} userr={userr}></Alluser>)  
            }
          </div>
        </div>
    );
};

export default Users;