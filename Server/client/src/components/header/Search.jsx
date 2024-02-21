import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    display: flex;
    background: #3b3b4f;
    width: 30%;
    height: 30px;
    margin-bottom: 19px;

`;
const InputSearchBase = styled(InputBase)`
    width: 100%;
    color: #fff;

`;

const SearchIconWrapper = styled(Box)`
    padding: 4px;

`

const Search = () => {
    return (
        <SearchContainer>
            <SearchIconWrapper>
                <SearchIcon style={{color: 'grey'}}/>
            </SearchIconWrapper>
            <InputSearchBase placeholder="Search 8,000+ tutorials" />
        </SearchContainer>
        
    )
}

export default Search;