import styled from 'styled-components';

import Label from "../atoms/Label";
import Input from '../atoms/Input';

const StyledForm = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    height: ${props => props.betweenSpaces ?'32%' : '15.7%'};
`;

const StyledDes = styled.div`
    /* border: 1px solid red; */
    display: flex;
    height: 25%;
`;

const StyledSpan = styled.span`
    color: #5138EE;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: auto;
`;

function WrapperForm({msn, type, placeholder, name, betweenSpaces}) {
    return ( 
        <StyledForm betweenSpaces={betweenSpaces}>
            <StyledDes>
                <Label msn={msn}></Label>
                <StyledSpan>*</StyledSpan>
            </StyledDes>
            <Input type={type} placeholder={placeholder} name={name}/>
        </StyledForm>
    );
}

export default WrapperForm;