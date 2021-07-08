import { Button, ButtonWrapper } from "../../globalStyles/buttons";
import { Text } from "../../globalStyles/text";
import { ModalBackground, ModalWrapper } from "./ModalStyles";


export default function Modal(modalData, prop) {

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
                    <br/><br/>
                </Text>
                {modalData.error !== '' && <div style={{
                    color: "red"
                }}>
                    Error was: {modalData.error}
                </div>}
                <Text>
                    Message: {modalData.message2}
                    <br/>
                    <br/>
                </Text>
                <ButtonWrapper>
                        <Button onClick={modalData.closeModal}>
                            Close Modal
                        </Button>
                </ButtonWrapper>
            </ModalWrapper>
        </ModalBackground>
    )
}
