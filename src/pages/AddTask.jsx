import styled from "styled-components";

import Navbar from "../components/molecules/Navbar";

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`;

function AddTask() {
    return ( 
        <StyledContainer>
            <Navbar></Navbar>
        </StyledContainer>
    );
}

export default AddTask;