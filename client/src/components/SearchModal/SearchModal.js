import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose
} from './SearchModalStyles';

const SearchModal = (modalData) => {

    console.log(modalData)

    return (
        // The Modal
        <>
            <ModalBackground>
                {/* Modal content */}
                <ModalWrapper>
                    <ModalContent>
                    Some text in the Modal..
                    </ModalContent>
                    <ModalClose onClick={modalData.callback} >&times;
                    </ModalClose>
                </ModalWrapper>
            </ModalBackground>
        </>
    );
};

export default SearchModal;