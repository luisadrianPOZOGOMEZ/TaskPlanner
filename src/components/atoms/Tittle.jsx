import styled  from "styled-components";

const StyledTittle = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    height: ${props => props.spacing ?'35%' : '12%'};
`;

function Tittle({spacing, des}) {
    return ( 
        <StyledTittle spacing={spacing}>{des}</StyledTittle>
    );
}

export default Tittle;
