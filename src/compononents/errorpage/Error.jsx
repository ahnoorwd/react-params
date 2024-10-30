import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
           <h2>O0ops !!!!!</h2> 
           
            {
                error.status === 404 && 
                <div>
                    <h3>The page is not found </h3>
                   <Link to='/'><button>Go Back to home </button></Link>
                </div>
            }
        </div>
    );
};

export default Error;