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
            <NavLink to='/Chats' activeStyle>
            Chats
            </NavLink>
            <NavLink to='/Add-a-friend' activeStyle>
            Add A Friend
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