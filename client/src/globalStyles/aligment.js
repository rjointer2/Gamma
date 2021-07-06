
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    z-index: 1;
/*     height: 800px; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    justify-content: center;
`;


export const Row = styled.div`
    display: grid;
    grid-auto-columns: minax(auto, 1fr);
    align-items: center;
    
    /* swap the column divs */
    grid-template-areas: ${({swapImagePlacement}) => swapImagePlacement ? `'col2  col1'` : `'col1  col2'` };

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({swapImagePlacement}) => swapImagePlacement ? `'col1  col2'` : `'col2  col1'` };
    }

    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
    }
`;

// columns div for the postions of the images

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    padding: 10px;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
    padding: 10px;
`;

export const FlexWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 720px) {
        flex-direction: column;
    }
`;

