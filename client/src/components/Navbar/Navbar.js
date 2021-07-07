// importing styled components styling for navbar
import {
    Nav,
    NavLink,
    NavTitle,
    NavMenu
} from './NavbarStyles';
    
// Navbar component
const Navbar = () => {
return (
    <>
    <Nav>
        <NavTitle to='/Sign-in' activeStyle>
            Gamma
        </NavTitle>
        <NavMenu>
            <NavLink to='/Favorite' activeStyle>
            Favorite
            </NavLink>
            <NavLink to='/Favorite' activeStyle>
            Chats
            </NavLink>
            <NavLink to='/Invite' activeStyle>
            Invite
            </NavLink>
            <NavLink to='/Games' activeStyle>
            Games
            </NavLink>
            <NavLink to='/Sign-in' activeStyle>
            Sign Out
            </NavLink>
        </NavMenu>
    </Nav>
    </>
);
};

export default Navbar;