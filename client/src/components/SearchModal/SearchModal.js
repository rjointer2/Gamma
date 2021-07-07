import {
    ModalBackground,
    ModalContent,
    ModalClose
} from './SearchModalStyles';

const SearchModal = () => {
    return (
        // The Modal
        <>
            <ModalBackground>

                {/* Modal content */}
                <ModalContent>
                    <ModalClose>&times;</ModalClose>
                    Some text in the Modal..
                </ModalContent>
            </ModalBackground>
        </>
    );
};

export default SearchModal;