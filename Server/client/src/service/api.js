import axios from 'axios';

const  URL = '';

export const authenticateSignin = async (data) => {
    try {
        return await axios.post(`${ URL}/signin`,data);
    } catch (error) {
        console.log('Error while calling Signin API -->', error.message);
        return error.response;
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${ URL}/login`,data);
    } catch (error) {
        console.log('Error while calling Login API -->', error.message);
        return error.response;
    }
}

