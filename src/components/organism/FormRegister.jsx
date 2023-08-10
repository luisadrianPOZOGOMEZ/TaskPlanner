import { Link } from 'react-router-dom';

import styled from "styled-components";

import StyledTittle from "../atoms/Tittle";
import WrapperForm from "../molecules/WrapperForm";
import WrapperFormR from "../molecules/WrapperFormR";
import Button from "../atoms/Button";


const StyledContainerForm = styled.div`
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 87%;
`;

const Styledp = styled.p`
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    /* border: 1px solid red;  */
    height: auto;
`;

function FormRegister() {
    return ( 
        <StyledContainerForm>
            <StyledTittle spacing={false} des="Sing Up"></StyledTittle>
            <form className="form">
                <WrapperForm msn="Name" type="text" placeholder="Alan Cabrera" /* value={username} */ betweenSpaces={false} />
                <WrapperFormR msn="Gender" type="text" placeholder="Male or Female"/>
                <WrapperFormR msn="Birthdate" type="text" placeholder="December 05"/>
                <WrapperForm msn="Email" type="email" placeholder="mail@gmail.com" /* value={username} */ name={'correo'}/>
                <WrapperForm msn="Password"  type="Password" placeholder="Min. 8 character" /* value={username} */ betweenSpaces={false}/>
                <Button type="button" value="Sing Up" />
                <Styledp>
                    Already have an Account?{' '}
                    <Link className="link" to="/">
                        Sing in
                    </Link>
                </Styledp> 
            </form>
        </StyledContainerForm>
    );
}

export default FormRegister;