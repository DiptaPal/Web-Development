import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h3>This is Header</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/error">Error</NavLink>
            </nav>
        </div>
    )
};

export default Header;
