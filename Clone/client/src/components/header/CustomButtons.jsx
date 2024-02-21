import { Box, Button,styled,Menu,MenuItem } from "@mui/material";
import LoginDialog from "../login/LoginDialog";
import { useState,useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";


const Wrapper = styled(Box)`
    display: flex;
    margin: 0 0 19px auto;
    & > button {
        margin-right: 40px;
        align-items: center;
    }
`;

const LoginButton = styled(Button)`
    background: #ffbf00;
    text-transform: none;
    color: black;
    font-size: 15px;
    padding: 5px 35px;
    border-radius: 1px;
    box-shadow: none;
    font-weight: 600;
`;
const MenuButton = styled(Button)`
    background: #0a0a23;
    text-transform: none;
    border-radius: 1px;
    border: 1px solid white;
    box-shadow: none;
`

const CustomButtons = () => {
    const [open,setOpen] = useState(false);
    const [openMenu,setMenuOpen] = useState(false);

    const handleMenuClick = (event) => {
        setMenuOpen(event.currentTarget);
    }
    const handleMenuClose = () => {
        setMenuOpen(false);
    }

    const {account,setAccount} = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }
    const logout = () => {
        setAccount('');
    }


    return(
        <Wrapper>
            <MenuButton onClick={handleMenuClick} variant="contained">Menu</MenuButton>
            <Menu
                anchorEl={openMenu}
                open={Boolean(openMenu)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Courses</MenuItem>
                <MenuItem onClick={() => {handleMenuClose(); logout();}}>Logout</MenuItem>
            </Menu>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                <LoginButton variant="contained" onClick={() => openDialog()}>Signin</LoginButton>
            }
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;