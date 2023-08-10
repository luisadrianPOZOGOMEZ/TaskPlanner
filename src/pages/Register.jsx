import styled from 'styled-components';

import FormRegister from '../components/organism/FormRegister';

const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const StyleddivForm = styled.div`
    /* border: 10px solid yellow; */
    display:  flex;
    justify-content: center;
    align-items: center; 

`;

const StyledDecoration = styled.div`
    background: #5138EE;
`;

function Register() {
    return ( 
        <StyledContainer>
            <StyleddivForm>
                <FormRegister></FormRegister>
            </StyleddivForm>
            <StyledDecoration></StyledDecoration>
        </StyledContainer> 
    );
}

export default Register;