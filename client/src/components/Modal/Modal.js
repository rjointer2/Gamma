import { Button, ButtonWrapper } from "../../globalStyles/buttons";
import { Text } from "../../globalStyles/text";
import { ModalBackground, ModalWrapper } from "./ModalStyles";


export default function Modal(modalData) {

    /* 

    the modal prop contain an object state that the developer can use dynamically
    so keep in mind of the object properties

    message1, meesage, closeModal, error, and callback

    */
    return (


        <ModalBackground>
            <ModalWrapper>
                <Text>
                    Message: {modalData.message1}
                    <br/><br/>
                    {modalData.error !== '' && <div>
                        Error was: modalData.error
                    </div>}
                    <br/><br/>
                    Message: {modalData.message2}
                    <br/>
                    <br/>
                    <ButtonWrapper>
                        <Button onClick={modalData.closeModal}>
                            Close Modal
                        </Button>
                    </ButtonWrapper>
                </Text>
            </ModalWrapper>
        </ModalBackground>
    )
}
