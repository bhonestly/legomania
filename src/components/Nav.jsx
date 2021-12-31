import { Link } from "react-router-dom";
import './NavStyles.scss'
const Nav = () => {
    return(
        <header>
            <nav className='nav'>
                <Link className='nav-link' to = '/'>LEGOmania</Link>
            </nav>
        </header>
    );
}

export default Nav;