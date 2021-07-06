import { Row, Column1, Container, Wrapper, Column2 } from "../../globalStyles/aligment";
import { SignUpContainer, Input, Form, InputContainer } from "./SignUpStyles";
import { Title, Text  } from '../../globalStyles/text';

import signUpSVG from '../../assets/signUpSVG.svg'
import { Img, ImgWrapper } from "../../globalStyles/img";


// add the 

const SignUp = ({  }) => {

    return (
        <div>
           <SignUpContainer>
           <Container>
                <Wrapper>
                    <Row>
                        <Column1>
                            <Form>
                                <Row>
                                    <Column1>
                                        <Title>
                                            Sign Up Today!
                                        </Title>
                                            <Row> 
                                                <Column1>
                                                    <InputContainer>
                                                        <Text>
                                                            Email
                                                        </Text>
                                                        <Input />
                                                    </InputContainer>
                                                    <InputContainer>
                                                        <Text>
                                                            Username
                                                        </Text>
                                                        <Input />
                                                    </InputContainer>
                                                </Column1>
                                                <Column2>
                                                    <InputContainer>
                                                        <Text>
                                                            Password
                                                        </Text>
                                                        <Input />
                                                    </InputContainer>
                                                    <InputContainer>
                                                        <Text>
                                                            Confirm Password
                                                        </Text>
                                                        <Input />
                                                    </InputContainer>
                                                </Column2>
                                                Button Here
                                            </Row>
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
           </SignUpContainer>
        </div>
    )
}

export default SignUp;