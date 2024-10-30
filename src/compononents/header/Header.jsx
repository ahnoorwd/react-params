
import { Link } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
        <div>
           <h1>Nav</h1>
           <nav>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contact">contact</Link>
            <Link to ="/posts">Post</Link>
            <Link to ="/user">Users</Link>
            </nav> 
        </div>
    );
};

export default Header;