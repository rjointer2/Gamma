import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose,
    Input
} from './SearchModalStyles';

// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const SearchModal = (modalData) => {

    console.log(modalData)
    // console.log(showModal)

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
                    <ModalClose onClick={modalData.callback}>
                        &times;
                    </ModalClose>
                </ModalWrapper>
            </ModalBackground>
        </>
    );
};

export default SearchModal;