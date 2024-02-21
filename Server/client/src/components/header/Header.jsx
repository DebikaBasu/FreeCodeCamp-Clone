import {Box, AppBar, Toolbar,styled} from '@mui/material';
import logo from '../header/logo.svg';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #0a0a23;
    height: 45px;
`;
const Component = styled(Box)`
    margin-bottom: 7px;
`
const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 450px;
`

const Header = () => {
    return (
        <StyledHeader>
            <Toolbar>
                <Search/>
                <Component>
                    <img src={logo} alt="logo" style={{ marginLeft: '70%', width: 250, height: 24 }}/>
                </Component>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
        
    )
}

export default Header;