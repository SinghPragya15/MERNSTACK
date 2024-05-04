import {Box,styled} from '@mui/material';
import {Chat as MessageIcon} from '@mui/icons-material';
import { useContext,useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from '../drawer/InfoDrawer';
const Component = styled(Box)`
height:40px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`;
const Wrapper = styled(Box)`
margin-left:auto;
&>={
    margin-left:2px;
    padding:18px;
    color:#000;
};
&:first-child{
    font-size:22px;
    margin-right:8px;
    margin-top:3px;
}
`
const Images =styled('img')({
height:45,
width:45,
borderRadius:'50%'
})
const Header = ()=>{
    const [openDrawer,setOpenDrawer]=useState(false);
    const {account}=useContext(AccountContext);
    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }
    return (
        <>
        <Component>
            <Images src={ account.picture } alt="dp" onClick={()=>toggleDrawer()}/>
            <Wrapper>
                <MessageIcon/>
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default Header;