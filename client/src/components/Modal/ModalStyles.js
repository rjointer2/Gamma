
import styled from 'styled-components';

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;
export const ModalWrapper = styled.div`
    height: 200px;
    width: 400px;
    box-shadow: 0 5px 16px rgba( 0, 0, 0, 0.2 );
    background: white;
    color: white;
    display: grid;
    position: relative;
    z-index: 10;
`;

export const ModalCloseButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;