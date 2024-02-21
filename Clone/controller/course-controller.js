import Course from "../model/course-schema.js"


export const getCourses = async (request,response) => {
    try {
        const courses =  await Course.find({});
        response.status(200).json(courses);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

