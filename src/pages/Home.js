import { StyledTitle,StyledTitle2,Avatar,StyledButton, ButtonGroup } from "../components/Styles";

import Logo from './../assets/favicon.png';

const Home =  () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top:0,
                left:0,
                backgroundColor:"transparent",
                width:"100%",
                padding:"15px",
                display:"flex",
                justifyContent:"flex-start"
            }}>
            <Avatar image={Logo}/>
            </div>
            <StyledTitle size={65}>
                selamat datang
            </StyledTitle>
            <StyledTitle2 size={27}>
                explore
            </StyledTitle2 >
            <ButtonGroup>
            <StyledButton to="/login">Masuk</StyledButton>
            </ButtonGroup>
            
        </div>
    );
}

export default Home;