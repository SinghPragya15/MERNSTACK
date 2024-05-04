import {useEffect,useState} from 'react';
import { getUsers } from '../../../service/Api';




const Conversations = () =>{
    const [users,setUsers]=useState([]);
   useEffect(()=>{
    const fetchData = async()=>{
     let response=await getUsers();
     setUsers(response);
    }
    fetchData();
   },[])
    return(
        <div>This is a conversation</div>
    )
}
export default Conversations;