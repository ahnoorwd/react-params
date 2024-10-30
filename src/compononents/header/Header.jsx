
import {  NavLink } from 'react-router-dom';
import'./Header.css'
const Header = () => {
    return (
        <div>
           <h1>Nav</h1>
           <nav>
            <NavLink to ="/">Home</NavLink>
            {/* <Link to ="/">Home</Link> */}
            <NavLink to ="/about">About</NavLink>
            {/* <Link to ="/about">About</Link> */}
            <NavLink to ="/contact">contact</NavLink>
            {/* <Link to ="/contact">contact</Link> */}
            <NavLink to ="/posts">Post</NavLink>

            {/* <Link to ="/posts">Post</Link> */}
            <NavLink to ="/user">Users</NavLink>

            {/* <Link to ="/user">Users</Link> */}
            </nav> 
        </div>
    );
};

export default Header;