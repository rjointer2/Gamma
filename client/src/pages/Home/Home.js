
import Modal from '../../components/Modal/Modal';
import Navbar from '../../components/Navbar/Navbar'
import { Container } from '../../globalStyles/aligment';
import { Text } from '../../globalStyles/text';
import ChatWindow from '../../components/Chat/ChatWindow';

const Home = () => {

    return (
        <div>
            <Navbar />
            <ChatWindow />
        </div>
    )
}

export default Home;