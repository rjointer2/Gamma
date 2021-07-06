import { Row, Column1, Container, Wrapper, Column2 } from "../../globalStyles/aligment";
import { SignUpContainer, Input, Form, InputContainer } from "./SignUpStyles";
import { Title, Text  } from '../../globalStyles/text';

import signUpSVG from '../../assets/signUpSVG.svg'


const SignUp = ({  }) => {

    return (
        <div>
           <Container>
                <Wrapper>
                    <Row>
                        <Column1>
                            <SignUpContainer>
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
                                                                Confirm Password
                                                            </Text>
                                                            <Input />
                                                        </InputContainer>
                                                    </Column1>
                                                    <Column2>
                                                        <InputContainer>
                                                            <Text>
                                                               Username
                                                            </Text>
                                                            <Input />
                                                        </InputContainer>
                                                        <InputContainer>
                                                            <Text>
                                                                Password
                                                            </Text>
                                                            <Input />
                                                        </InputContainer>
                                                    </Column2>
                                                </Row>
                                        </Column1>
                                    </Row>
                                </Form>
                            </SignUpContainer>
                        </Column1>
                        <Column2>
                            
                        </Column2>
                    </Row>
                </Wrapper>
           </Container>
        </div>
    )
}

export default SignUp;