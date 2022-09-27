import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1><Link to="/">Home</Link></h1>
            <h2><Link to="/creeer">Creeer taak</Link></h2>
        </div>
    );
}
 
export default Navbar;
