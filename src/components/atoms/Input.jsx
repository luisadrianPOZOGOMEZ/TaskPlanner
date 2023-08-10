import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: 3.125rem;
    border: 1px solid #E1DFEC;
    background: #FFF;
    padding: 0 7%;
    width: auto;
    height: 3.75rem;
    flex-shrink: 0;
`;

function Input({type, placeholder, name}) {
    return ( 
        <StyledInput type={type} placeholder={placeholder} name={name}/>
    );
}

export default Input;