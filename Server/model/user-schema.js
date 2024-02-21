import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        rquired: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const user = mongoose.model('user',userSchema);

export default user;