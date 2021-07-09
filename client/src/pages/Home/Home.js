
// Auth Client Ulits



// Components

import Navbar from '../../components/Navbar/Navbar'
import ChatWindow from '../../components/Chat/ChatWindow';
import AuthClient from '../../ulit/auth/AuthClient';




// token here
const token = AuthClient.loggedIn() ? AuthClient.getToken() : null;
// if the log in is true then get the token from local Storage and if falsy
// we can direct the user the sign in page "/"

const Home = () => {

    if(!token) {
        window.location.assign('/signin');
    }

    return (
        <div>
            <Navbar />
            <ChatWindow />
        </div>
    )
}

export default Home;