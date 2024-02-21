import { Box,Button,Typography,styled } from "@mui/material";

const Component = styled(Box)`
    width: 100%;
    height: 100vh;
    background: #d8d1d1;
    font-family: Lato,sans-serif;
`;
const LearnToCode = styled(Typography)`
    color: #0a0a23;
    font-weight: 700;
`;

const BuildProject = styled(Typography)`
    color: #0a0a23;
    font-weight: 700;
`;

const EarnCertificate = styled(Typography)`
    color: #0a0a23;
    font-weight: 700;
`;

const FreeCodeCamp = styled(Typography)`
    color: #0a0a23;
    font-weight: 700;
    font-size: 1.25rem;
`;

const StartButton = styled(Button)`
    background: #ffbf00;
    text-transform: none;
    color: black;
    width: 80%;
    height: 60px;
    font-size: 2rem;
    padding: 5px 35px;
    border-radius: 1px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    font-family: Hack-ZeroSlash,monospace;
    align-items: center;
    margin-left: 55px;
`;

const Wrapper = styled(Box)`
padding: 90px 410px;

`

const Home = () => {
    return(
        <Component>
            <Wrapper>
                <LearnToCode variant="h2" style={{marginBottom: 25}}>Learn to code — for free.</LearnToCode>
                <BuildProject variant="h2" style={{marginBottom: 25}}>Build projects.</BuildProject>
                <EarnCertificate variant="h2" style={{marginBottom: 25}}>Earn certifications.</EarnCertificate>
                <FreeCodeCamp style={{marginBottom: 30}}>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</FreeCodeCamp>
                <Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
                <StartButton>Get's started (it's free)</StartButton>
            </Wrapper>
        </Component>
    )
}

export default Home;