
import styled from 'styled-components';

export const LoginWrapper = styled.div`
    background-color: ${({color}) => (color ? 'red' : 'blue')};
    height: 100px;
    width: 100%;

    &:hover {
        color: 'green';
    }

`;