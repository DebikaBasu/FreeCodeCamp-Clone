import express from "express";
import dotenv from 'dotenv';
import  Connection  from "./database/db.js";
import DefaultData from "./database/default.js";
import Router from "./routes/route.js";
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-wuugyhl-shard-00-00.piq3pzz.mongodb.net:27017,ac-wuugyhl-shard-00-01.piq3pzz.mongodb.net:27017,ac-wuugyhl-shard-00-02.piq3pzz.mongodb.net:27017/FREECODECAMP?ssl=true&replicaSet=atlas-s9b45m-shard-0&authSource=admin&retryWrites=true&w=majority`;




Connection(URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT,() => console.log(`Server is running succesfully on ${PORT}`));
DefaultData();