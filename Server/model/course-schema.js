import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    tittle: String
});

const Course = mongoose.model('course',courseSchema);

export default Course;