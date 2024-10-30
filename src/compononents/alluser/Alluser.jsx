import { Link } from "react-router-dom";

const Alluser = ({userr}) => {
    const {id, name, email, phone,}=userr;
    const userstyle={
        border:"2px solid red",
        padding:"5px",
        borderRadius:"20px",
        marginBottom:'5px'
    }
    return (
        <div style={userstyle}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <Link to ={`/user/${id}`}>show details</Link>
        </div>
    );
};

export default Alluser;