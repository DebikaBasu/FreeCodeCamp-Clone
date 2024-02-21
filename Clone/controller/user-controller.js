import { response } from "express";
import User from "../model/user-schema.js";

import  jsonwebtoken  from "jsonwebtoken";

const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

export const userSignin = async (request,response) => {

    try {

        const existedUser = await User.findOne({email: request.body.email});
        const user = request.body;
        if(existedUser){
            return response.status(401).json({
                token: jsonwebtoken.sign({ data: 401 }, JWT_SECRET),
                message: 'User Already Exist'
            });
        }
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({
            token: jsonwebtoken.sign({ data: user }, JWT_SECRET)
        });
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

export const userLogin = async(request,response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        let user = await User.findOne({email: email,password: password});

        if(user){
            return response.status(200).json({
                token: jsonwebtoken.sign({ data: user }, JWT_SECRET)
            });
        }
        else{
            return response.status(401).json({
                token: jsonwebtoken.sign({ message: 'Invalid Login' }, JWT_SECRET)
            });
        }
    } catch (error) {
        response.status(500).json('Error --> ',error.message);
    }
}