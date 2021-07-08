
// apollo client and mutations
import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../../ulit/mutation/loginMutation';



// Styles and Assest 

import { Column1, Column2, Container, Row, Wrapper } from "../../globalStyles/aligment";
import { Img, ImgWrapper } from "../../globalStyles/img";
import { Text, Title } from "../../globalStyles/text";

import signUpSVG from '../../assets/signUpSVG.svg';
import { Form, Input, InputContainer, SignContainer } from "../../globalStyles/form";
import { Button, ButtonWrapper } from '../../globalStyles/buttons';

// hooks

import { useState } from 'react';
import AuthClient from '../../ulit/auth/AuthClient';

const SignIn = () => {

    // update the state's properties in this state object
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);

    // set the state's object property with a function copy the current state
    // replace it with the event on the UI and set state to that property

    const updateStateUIProps = event => {
        // destructure the name and value from the input element
        const { name, value } = event.target
        // update the new copy of the state with new properties
        setUserFormData({ ...userFormData, [name]: value})
    }

    const requestToSignIn = async event => {
        event.preventDefault();
    
        try {
            const { data } = await login({
              variables: { ...userFormData } 
            })
      
            AuthClient.login(data.login.token)
        } catch (err) {
            console.log('?')
            // we ccan use this in development but it
            // it shouldn't be used in production for the client to see
            console.error(err.message);
        }
    }

    return (
        <div>
           <SignContainer>
                <Container>
                    <Wrapper>
                        <Row>
                            <Column1>
                                <Form onSubmit={requestToSignIn}>
                                    <Title>
                                        Welcome Back
                                    </Title>
                                        <Row> 
                                            <Column1>
                                                <InputContainer>
                                                    <Text>
                                                        Enter Your Username
                                                    </Text>
                                                    <Input 
                                                        autocomplete="on"
                                                        placeholder='Enter username'
                                                        name='username'
                                                        onChange={updateStateUIProps}
                                                        value={userFormData.username}
                                                        required
                                                    />
                                                </InputContainer>
                                                <InputContainer>
                                                    <Text>
                                                        Enter Your Password
                                                    </Text>
                                                    <Input 
                                                        type='cc-csc'
                                                        placeholder='Enter password'
                                                        name='password'
                                                        onChange={updateStateUIProps}
                                                        value={userFormData.password}
                                                        autocomplete="on"
                                                        required
                                                    />
                                                </InputContainer>
                                            </Column1>
                                        </Row>
                                        <ButtonWrapper>
                                            <Button onClick={requestToSignIn} type="submit">
                                                Sign In!
                                            </Button>
                                        </ButtonWrapper>
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