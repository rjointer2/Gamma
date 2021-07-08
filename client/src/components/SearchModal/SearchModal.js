import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose,
    Input
} from './SearchModalStyles';

const SearchModal = ({ openModal }) => {
    return (
        // The Modal
        <>
            <ModalBackground>
                {/* Modal content */}
                <ModalWrapper>
                    <ModalContent>
                    {/* <InputContainer> */}
                        {/* <Input 
                            // type='cc-csc'
                            placeholder='Search username'
                            name='username'
                            autocomplete="on"
                        /> */}
                    {/* </InputContainer> */}
                        <Input type="text" placeholder="Search.." />

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