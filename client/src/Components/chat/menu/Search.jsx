import {Search as SearchIcon}from '@mui/icons-material'
import{Box,InputBase,styled} from '@mui/material';
const Component = styled(Box)`
background : #fff;
height:45px;
border-bottom:1px solid #2F2F2F;
display:flex;
align-items:center;
`;
const Wrapper = styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0 13px;
`;
const Icon = styled(InputBase)`
position : absolute;
height:100%;
padding:6px 10px;
color:#919191;
`;
const InputField = styled(InputBase)`
Width:400px;
padding:16px;
padding-left:65px;
height:15px;
`;
const Search=()=>{
return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon fontSize="small"/>
            </Icon>
            <InputField placeholder='Search or start a new chat '/>
        </Wrapper>
    </Component>
)
}
export default Search;