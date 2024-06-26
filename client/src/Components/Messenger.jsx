
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import {AppBar,Toolbar,Box,styled} from '@mui/material';
import LoginDialog from './account/LoginDialog';
import ChatDialog from './chat/ChatDialog';
const Component=styled(Box)`
height:100vh;
background-color:#DCDCDC;
`
const LoginHeader=styled(AppBar)`
   height:200px;
   background-color:#00bfa5;
   Box-shadow:none;
`
const Header=styled(AppBar)`
   height:125px;
   background-color:#00A884;
   Box-shadow:none;
`   
const Messenger=()=>{
    const { account }=useContext(AccountContext);
    return (
        
        <Component>
            {
                account ? 
               <> 
               <Header>
                <Toolbar>

                </Toolbar>
               </Header>
               <ChatDialog/>
               </>
                 :
               <>
            <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
        <LoginDialog/>
        </>
       }
        </Component>
    )
}

export default Messenger;