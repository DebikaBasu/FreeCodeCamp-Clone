import {Box,Button,Dialog, TextField, Typography, styled} from '@mui/material';
import { useState, useContext } from 'react';
import { authenticateSignin, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;

`
const Image = styled(Box)`
    background: #0a0a23;
    height: 82%;
    width: 23%;
    padding: 45px 35px;
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }

`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #3b3b4e;
    color: #FFFFFF;
    height: 48px;
    border-radius: 2px;
`;

const GoogleButton = styled(Button)`
    text-transform: none;
    background: #FFF;
    color: #2874f0;
    height: 48px;
    font-weight: 600;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const CreateAccount = styled(Button)`
    text-transform: none;
    background: #2874f0;
    color: #fff;
    font-weight: 600;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error = styled(Typography)`
    font-size: 15px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const signinInitialValues = {
    fullname: '',
    email: '',
    password: ''
}

const loginInitialValues = {
    email: '',
    password: ''
}

const accountInitialValues = {
    signin: {
        view: 'signin'
    },
    signup: {
        view: 'signup'
    }
}

const LoginDialog = ({open,setOpen}) => {

    const googleLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png';
    
    const [account, toogleAccount] = useState(accountInitialValues.signin);
    const [signin,setSignin] = useState(signinInitialValues);
    const [login,setLogin] = useState(loginInitialValues);
    const [error,setError] = useState(false);
    const [errorEmail,setErrorEmail] = useState(false);
    const navigate = useNavigate();

    const {setAccount} = useContext(DataContext);
    const handleClose = () => {
        setOpen(false);
        toogleAccount(accountInitialValues.signin);
        setError(false);
        setErrorEmail(false);
    }

    const onInputChange = (e) => {
        setSignin({...signin,[e.target.name]: e.target.value});
        console.log(signin);
    }
    const toogleSignup = () => {
        toogleAccount(accountInitialValues.signup);
    }
    const toogleSignin = () => {
        toogleAccount(accountInitialValues.signin);
    }

    const onValueChange = (e) =>{
        setLogin({...login,[e.target.name]: e.target.value})
    }
    const signinUser = async () => {
        let response = await authenticateSignin(signin);
        //console.log(response);
        var decodedResponse = jwt_decode(response.data.token);
        //console.log(decodedResponse.status);
        if(response.status === 401){
            setErrorEmail(true);
            navigate("/");
        }
        else if(response.status === 200){
            handleClose();
            setAccount(decodedResponse.data.fullname);
            navigate("/courses");
        }
        if(!response) return;
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        var decodedResponse = jwt_decode(response.data.token);
        if(response.status === 200){
            handleClose();
            setAccount(decodedResponse.data.fullname);
            navigate("/courses");
        }
        else{
            setError(true);
        }
    }

    const loginUserGoogle = useGoogleLogin({
        onSuccess: async response => {
            try{
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                handleClose();
                setAccount(res.data.given_name);
                navigate("/courses");
            }
            catch(err){
                navigate("/");
            }
        }
    });

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Component>
                <Box style={{display: 'flex', height: '100%'}}>
                    <Image>

                    </Image>
                    { account.view === 'signin' ?
                        <Wrapper>
                            <TextField required onChange={(e) => onValueChange(e)} name='email' variant='standard' label="Enter Your Email"/>
                            {error && <Error>Please enter valid Email & Password</Error> }
                            <TextField required onChange={(e) => onValueChange(e)} name='password' variant='standard' label="Enter Your Password"/>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{textAlign: 'center', fontWeight: 600, color: 'grey'}}>OR</Typography>
                            <GoogleButton onClick={loginUserGoogle}>
                                <img width="20px" src={googleLogo} alt='Google Signin' style={{marginBottom:3, marginRight:5}}/>
                                Signin with Google
                            </GoogleButton>
                            <CreateAccount onClick={() => toogleSignup()}>New User ? SignUp</CreateAccount>
                        </Wrapper>
                    :
                        <Wrapper>
                            <TextField required onChange={(e) => onInputChange(e)} name='fullname' variant='standard' label="Enter Full Name"/>
                            <TextField required onChange={(e) => onInputChange(e)} name='email' variant='standard' label="Enter Your Email"/>
                            {errorEmail && <Error>Email id already exists</Error> }
                            <TextField required onChange={(e) => onInputChange(e)} name='password' variant='standard' label="Enter Your Password"/>
                            <LoginButton onClick={() => signinUser()}>Login</LoginButton>
                            <Typography style={{textAlign: 'center', fontWeight: 600, color: 'grey'}}>OR</Typography>
                            <GoogleButton onClick={loginUserGoogle}>
                                <img width="20px" src={googleLogo} alt='Google Signin' style={{marginBottom:3, marginRight:5}}/>
                                Signin with Google
                            </GoogleButton>
                            <CreateAccount onClick={() => toogleSignin()}>Already have an account ? Signin</CreateAccount>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;