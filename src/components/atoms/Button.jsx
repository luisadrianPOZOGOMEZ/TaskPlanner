import styled from "styled-components";

const StyledButton = styled.button`
    width: 100%;
    height: 60px;
    flex-shrink: 0;
    border-radius: 50px;
    border: 1px solid #E1DFEC;
    background: var(--c-2, #5138EE);

    color: #FFF;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 6%;
    margin-top: 5%;
    cursor: pointer;
`;

function Button({type, value, handlerClick}) {
    return ( 
        <StyledButton type={type} onClick={handlerClick}>{value}</StyledButton>
    );
}

export default Button;