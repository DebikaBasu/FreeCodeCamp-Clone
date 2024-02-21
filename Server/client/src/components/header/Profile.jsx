import { Box, Typography,Menu,MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Profile = ({account,setAccount}) => {

    const navigate = useNavigate();

    const [open,setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const logout = () => {
        setAccount('');
        navigate("/");
    }

    return(
        <>
            <Box onClick={handleClick}><Typography style={{marginTop: 2, cursor: 'pointer'}}>{account}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose(); logout();}}>Logout</MenuItem>
            </Component>
        </>
    )
}

export default Profile;