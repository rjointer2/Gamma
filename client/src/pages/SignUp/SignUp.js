
// apollo client and mutations
import { useMutation } from '@apollo/client';

// Sign up mutation 
import { SIGN_UP_USER } from '../../ulit/mutation/loginMutation';
import AuthClient from '../../ulit/auth/authClient';

import { Row, Column1, Container, Wrapper, Column2 } from "../../globalStyles/aligment";
import { Title, Text  } from '../../globalStyles/text';

import signUpSVG from '../../assets/signUpSVG.svg';
import { Img, ImgWrapper } from "../../globalStyles/img";
import { Form, Input, InputContainer, SignContainer } from "../../globalStyles/form";
import { useState } from 'react';


// add the 

const SignUp = ({  }) => {

    // state object of the sign up form
    const [formData, setFormData] = useState({ email: '', username: '', password: '' });

    // set the state's object property with a function copy the current state
    // replace it with the event on the UI and set state to that property

    const updateStateUIProps = event => {
        // destructure the name and value from the input element
        const { name, value } = event.target
        // update the new copy of the state with new properties
        setFormData({ ...formData, [name]: value})
    }

    // function to set form's input value on onChange and send a sign up request mutation
    const requestToSignUp = async event => {
        event.preventDefault();

        let condition = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        if(!formData.username.match(condition) && !formData.password.match(condition)) return false;

        try {
            
        } catch (err) {

        }

    }


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
                                                Sign Up Today!
                                            </Title>
                                                <Row> 
                                                    <Column1>
                                                        <InputContainer>
                                                            <Text>
                                                                Email
                                                            </Text>
                                                            <Input 
                                                                type='cc-csc'
                                                                placeholder='Enter email'
                                                                name='password'
                                                                onChange={updateStateUIProps}
                                                                value={formData.email}
                                                                autocomplete="on"
                                                                required
                                                            />
                                                        </InputContainer>
                                                        <InputContainer>
                                                            <Text>
                                                                Username
                                                            </Text>
                                                            <Input 
                                                                type='cc-csc'
                                                                placeholder='Enter username'
                                                                name='password'
                                                                onChange={updateStateUIProps}
                                                                value={formData.username}
                                                                autocomplete="on"
                                                                required
                                                            />
                                                        </InputContainer>
                                                    </Column1>
                                                    <Column2>
                                                        <InputContainer>
                                                            <Text>
                                                                Password
                                                            </Text>
                                                            <Input 
                                                                type='cc-csc'
                                                                placeholder='Enter password'
                                                                name='password'
                                                                onChange={updateStateUIProps}
                                                                value={formData.password}
                                                                autocomplete="on"
                                                                required
                                                            />
                                                        </InputContainer>
                                                        <InputContainer>
                                                            <Text>
                                                                Confirm Password
                                                            </Text>
                                                            <Input 
                                                                type='cc-csc'
                                                                placeholder='Enter password'
                                                                name='password'
                                                                autocomplete="on"
                                                                required 
                                                            />
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
           </SignContainer>
        </div>
    )
}

export default SignUp;