import styled from "styled-components";

import FormLogin from "../components/organism/FormLogin";

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const StyleddivForm = styled.div`
    /* border: 10px solid yellow;  */
    display:  flex;
    justify-content: center;
    align-items: center; 

`;

const StyledDecoration = styled.div`
    background: #5138EE;
`;
function Login() {
    return (
        <StyledContainer>
            <StyleddivForm>
                <FormLogin></FormLogin>
            </StyleddivForm>
            <StyledDecoration></StyledDecoration>
        </StyledContainer> 
    );
}

export default Login;