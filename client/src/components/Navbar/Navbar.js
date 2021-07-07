// importing styled components styling for navbar
import {
    Nav,
    NavLink,
    NavTitle,
    NavMenu
} from './NavbarStyles';

import SearchModal from '../SearchModal/SearchModal';
    
// Navbar component
const Navbar = () => {

    // const SearchModal = () => {

    // }

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
            <NavLink to='/Add-a-friend' onClick={SearchModal}>
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