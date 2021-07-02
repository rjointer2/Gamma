import { FormContainer, FormGrid, Input, LoginContainer } from "./LoginStyles"


const Login = () => {

    let color = false

    return (
        <LoginContainer>
            <FormContainer>
               <FormGrid>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
               </FormGrid>
            </FormContainer>
        </LoginContainer>
    )
}

export default Login;