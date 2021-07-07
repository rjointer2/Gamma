import { Text } from "../../globalStyles/text";
import { ModalBackground, ModalWrapper } from "./ModalStyles";



export default function Modal({props}) {
    return (
        <ModalBackground>
            <ModalWrapper>
                <Text>
                    Hi
                </Text>
            </ModalWrapper>
        </ModalBackground>
    )
}
