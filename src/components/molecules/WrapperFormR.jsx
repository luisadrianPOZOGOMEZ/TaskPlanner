import styled from "styled-components";

import Label from "../atoms/Label";
import Input from '../atoms/Input';

const StyledForm = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: 15.7%;
`;

const StyledDes = styled.div`
    /* border: 1px solid red; */
    display: flex;
    height: 25%;
`;



function WrapperFormR({msn, type, placeholder, name}){
    return ( 
        <StyledForm>
            <StyledDes>
                <Label msn={msn}></Label>
            </StyledDes>
            <Input type={type} placeholder={placeholder} name={name}/>
        </StyledForm>
    );
}

export default WrapperFormR;