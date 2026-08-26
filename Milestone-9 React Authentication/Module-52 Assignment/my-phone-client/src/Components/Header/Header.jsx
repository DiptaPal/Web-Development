import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className="mb-10">
            <NavLink className="text-gray-600 bg-white shadow px-4 py-2 rounded" to="/">Home</NavLink>
            <NavLink className="text-gray-600 bg-white shadow px-4 py-2 rounded ml-4" to="/phones">Phones</NavLink>
        </div>
    );
};

export default Header;