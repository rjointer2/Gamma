// importing react hooks
import { useState } from 'react';

// importing styled components styling for navbar
import {
    Nav,
    NavLink,
    NavTitle,
    NavMenu
} from './NavbarStyles';

import SearchModal from '../SearchModal/SearchModal';
// import Modal from '../Modal/Modal';
    
// Navbar component
const Navbar = () => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        console.log("clicked!!");
        setShowModal(prev => !prev);
    };

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
            <NavLink to='/Add-a-friend' activeStyle onClick={(e)=> {
                e.preventDefault();
                openModal();
            }}>
            Add A Friend
                <SearchModal showModal={showModal} setShowModal={setShowModal} />
                
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