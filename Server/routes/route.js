import  express from "express";
import { userSignin,userLogin } from "../controller/user-controller.js";
import { getCourses } from "../controller/course-controller.js";


const router = express.Router();

router.post('/signin', userSignin);
router.post('/login',userLogin);

router.get('/courses',getCourses);

export default router;