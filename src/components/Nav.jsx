import { Link } from "react-router-dom";
import './NavStyles.scss'
const Nav = () => {
    return(
        <header>
            <nav className='nav'>
                <Link to = '/'>Home</Link>
                <Link to ='/'>Another Page</Link>
            </nav>
        </header>
    );
}

export default Nav;