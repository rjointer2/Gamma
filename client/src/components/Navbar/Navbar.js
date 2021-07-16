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


return (
    <>
    { showModal && <SearchModal openModal={openModal} /> }
    <Nav>
        <NavTitle to='/Sign-in'>
            Gamma
        </NavTitle>
        <NavMenu>
            <NavLink to='/Add-a-friend' onClick={(e)=> {

                e.preventDefault();
                openModal();
            }}>
            Add A Friend

            </NavLink>
            <NavLink to='/Signin'>
                Sign Out
            </NavLink>
        </NavMenu>
    </Nav>
    </>
  );
}

export default Navbar;