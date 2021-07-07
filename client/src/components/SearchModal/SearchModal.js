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
            {showModal ? (
            <ModalBackground>
                {/* Modal content */}
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                    Some text in the Modal..
                    </ModalContent>
                    <ModalClose onClick={() => setShowModal(prev => !prev)}>&times;</ModalClose>
                </ModalWrapper>
            </ModalBackground> )
            : null}
        </>
    );
};

export default SearchModal;