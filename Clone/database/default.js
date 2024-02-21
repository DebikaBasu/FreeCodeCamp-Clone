import { courses } from "../constants/data.js"
import Course from "../model/course-schema.js";


const DefaultData = async () => {
    try {
        await Course.insertMany(courses);
        console.log('Data(courses) imported succesfully');
    } catch (error) {
        console.log('Error while inserting default data in database -->', error.message);
    }
}

export default DefaultData;