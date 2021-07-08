import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose
} from './SearchModalStyles';

const SearchModal = ({ openModal }) => {

    return (
        // The Modal
        <>
            <ModalBackground>
                {/* Modal content */}
                <ModalWrapper>
                    <ModalContent>
                    Some text in the Modal..
                    </ModalContent>
                    <ModalClose onClick={openModal}>
                        &times;
                    </ModalClose>
                </ModalWrapper>
            </ModalBackground> 
        </>
    );
};

export default SearchModal;