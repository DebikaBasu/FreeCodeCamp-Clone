import * as actionType from "../constants/courseConstant";

export const getCoursesReducer = (state = { courses: []},action) => {
    switch(action.type){
        case actionType.GET_COURSE_SUCCESS:
            return { courses: action.payload }

        case actionType.GET_COURSE_FAIL:
            return { error: action.payload }

        default:
            return state
    }
}