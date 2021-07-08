import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose
} from './SearchModalStyles';

const SearchModal = (showModal, setShowModal) => {
    return (
        // The Modal
        <>
            <ModalBackground>
                
                {/* Modal content */}
                <ModalWrapper>
                    <ModalContent>
                    Some text in the Modal..
                    </ModalContent>
                    <ModalClose 
                        onClick={() => setShowModal(prev => !prev)}>&times;
                    </ModalClose>
                </ModalWrapper>
            </ModalBackground>
        </>
    );
};

export default SearchModal;