import styled from "styled-components";


const StyledNav = styled.nav`
    height: 95px;
    width: 100%;
    background: var(--c-2, #5138EE);
`;

const StyledcontainerNav = styled.div`
    /* border: 1px solid red; */
    height: auto;
`

function Navbar() {
    return (  
        <StyledNav>
            <StyledcontainerNav>

            </StyledcontainerNav>
        </StyledNav>
    );
}

export default Navbar;

