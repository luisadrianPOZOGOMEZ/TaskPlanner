import { Link } from 'react-router-dom';

import styled from 'styled-components';

import StyledTittle from "../atoms/Tittle";
import WrapperForm from '../molecules/WrapperForm';
import Button from '../atoms/Button';

import '../../assets/styles/FormLogin.css'

const StyledContainerF = styled.div`
    /* border: 1px solid purple; */
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 65%;
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


function FormLogin() {
    return ( 
        <StyledContainerF>
            <StyledTittle spacing={true} des="Login"></StyledTittle>
            <form className='form'>
                <WrapperForm msn="Email" type="text" placeholder="mail@gmail.com" /* value={username} */ betweenSpaces={true}/>
                <WrapperForm msn="Password"  type="Password" placeholder="Min. 8 character" /* value={username} */ betweenSpaces={true} />
                <Button type="button" value="Login" />
                <Styledp>
                    Not register yet?{' '}
                    <Link className="link" to="Register">
                        Create an Account
                    </Link>
                </Styledp> 
            </form>
        </StyledContainerF>
    );
}

export default FormLogin;