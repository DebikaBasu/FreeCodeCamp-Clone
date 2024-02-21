import { useEffect } from "react";
import {getCourses} from '../../redux/actions/courseActions';
import {useDispatch, useSelector} from 'react-redux';
import { Box,Typography, styled } from "@mui/material";

const Component = styled(Box)`
    width: 100%;
    height: 100vh;
    font-family: Lato,sans-serif;
`;

const WelcomeText = styled(Typography)`
    color: #0a0a23;
    font-weight: 700;
    font-family: Hack-ZeroSlash,monospace;
    text-align: center !important;
    font-size: 2rem;
    padding-top: 25px;
`;

const QuoteText = styled(Typography)`
    text-align: center;
    font-size: 1.5rem;
    font-family: Hack-ZeroSlash,monospace;
    margin-top: 12px;
`;

const AuthorText = styled(Typography)`
    text-align: center;
    font-family: Hack-ZeroSlash,monospace;
    margin-top: 3px;
    font-style: italic;
    font-size: 1.2rem;

`;

const Wrapper = styled(Box)`
    display: flex;
    width: 25%;
    justify-content: center;
    margin-top: 10px;
    margin-left: 30%;
    flex-direction: column;
`;
const CourseContent = styled(Box)`
    width: 150%;
    border: 2px solid black;
    font-family: Hack-ZeroSlash,monospace;
    padding: 15px;
    text-align: center;
    background: #d8d1d1;
    margin: 5px;
    cursor: pointer;
`


const Course = () => {

    const {courses} = useSelector(state => state.getCourses);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses());
    },[dispatch])

    return(
        <Component>
            <Box>
                <WelcomeText variant="h3">Welcome to freeCodeCamp.org</WelcomeText>
                <QuoteText>"I have not failed. I've just found 10,000 ways</QuoteText>
                <QuoteText style={{marginTop: 5}}>that won't work."</QuoteText>
                <AuthorText>- Thomas A. Edison</AuthorText>
            </Box>
            <Wrapper>
                {
                    courses.map(course => {
                        return <CourseContent>{course.tittle} (300 hours)</CourseContent>
                    })
                }
            </Wrapper>
        </Component>
    )
}

export default Course;