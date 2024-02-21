import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getCoursesReducer } from './reducers/courseReducer';

const reducer = combineReducers({
    getCourses: getCoursesReducer
});

const middleware = [thunk];


const store = createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;