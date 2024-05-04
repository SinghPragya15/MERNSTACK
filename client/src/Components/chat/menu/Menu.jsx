import {Box,InputBase,styled} from '@mui/material';
import Header from './Header';
import Search from './Search';
import Conversations from './Conversation';
const Component=styled(Box)`
background:#fff;
height:45px;
border-bottom:1px solid #F2F2F2;
`
//const Wrapper=styled(Box)`
//`;
//const Icon=styled(Box)`
//`;
//const InputField=styled(InputBase)`
//
//`;
const Menu=()=>{
    return(
        <Component>
        <Box>
            <Header/>
            <Search/>
            <Conversations/>
        </Box>
        </Component>
    )
}
export default Menu;