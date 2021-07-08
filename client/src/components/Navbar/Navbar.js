// Styles
import './Navbar.css';

// Array of links

import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';


const Navbar = ({click}) => {
    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar_logo">
                <h2>
                    Gamma Chat App
                </h2>
            </div>
            {/* Links */}
            {/* 
            
                map out the the links and with jsx dynmaically map
                each object's prop in the to attr
            */}

                <ul className="navbar_links">

                { SidebarData.map((val, link) => {
                    return (
                            <li>
                            <Link to={val.link} className='nav_link'>
                                {val.icon}
                            </Link>
                        </li>
                        )  
                    }) 
                }

                </ul>
                

            {/* 
                Once the state is true
            */}
            <div className="hamburger_menu" onClick={click}>
               <MenuIcon />
            </div>
        </nav>
    )
}

export default Navbar;

/*
<ul className="navbar_links">
                    { SidebarData.map((val, link) => {
                        <li>
                            <Link to={val.link} className='nav_link'>
                                {val.icon}
                            </Link>
                        </li>
                    }) }
                    </ul>
*/