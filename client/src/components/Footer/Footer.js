// importing styled components styling for Footer
import {
    FooterBar,
    CopyRight,
    TeamLink, 
    Link
} from './FooterStyles';
    
// Footer component
const Footer = () => {
return (
    <>
    <FooterBar>
        <CopyRight>
            &copy; 2021 - Brought to you by Team Gamma
        </CopyRight>
        <TeamLink>
            <Link as="a" href="https://github.com/rjointer2" target=" ">Roosevelt Jointer</Link> 
            <Link as="a" href="https://github.com/senait77" target=" "> Senait Gerezgiher</Link> 
            <Link as="a" href="https://github.com/mmtariqk" target=" "> Muhammad Tariq</Link>
            <Link as="a" href="https://github.com/htang2021" target=" "> Hung Tang</Link>
        </TeamLink>
    </FooterBar>
    </>
);
};

export default Footer;