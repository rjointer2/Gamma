
import { Column1, Column2, Container, Row, Wrapper } from "../../globalStyles/aligment";
import { Img, ImgWrapper } from "../../globalStyles/img";
import { Text, Title } from "../../globalStyles/text";

import signUpSVG from '../../assets/signUpSVG.svg';
import { Form, Input, InputContainer, SignContainer } from "../../globalStyles/form";

const SignIn = ({  }) => {

    return (
        <div>
           <SignContainer>
                <Container>
                    <Wrapper>
                            <Row>
                                <Column1>
                                    <Form>
                                        <Row>
                                            <Column1>
                                                <Title>
                                                    Welcome Back
                                                </Title>
                                                    <Row> 
                                                        <Column1>
                                                            <InputContainer>
                                                                <Text>
                                                                    Enter Your Username
                                                                </Text>
                                                                <Input />
                                                            </InputContainer>
                                                            <InputContainer>
                                                                <Text>
                                                                    Enter Your Password
                                                                </Text>
                                                                <Input />
                                                            </InputContainer>
                                                        </Column1>
                                                    </Row>
                                                    Button Here
                                            </Column1>
                                        </Row>
                                    </Form>
                                </Column1>
                                <Column2>
                                    <ImgWrapper>
                                        <Img src={signUpSVG} />
                                    </ImgWrapper>
                                </Column2>
                            </Row>
                        </Wrapper>
                    </Container>
           </SignContainer>
        </div>
    )
}

export default SignIn;