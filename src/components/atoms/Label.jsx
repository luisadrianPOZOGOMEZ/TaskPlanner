import styled from 'styled-components';

const StyledLabel = styled.label`
    color: #000;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 25%;
    width: auto;
`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
    );
}

export default Label;
;