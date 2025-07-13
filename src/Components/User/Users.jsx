import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { fetchUser } from '../../store/UsersSlice';

function Users() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUser());
    } , [dispatch]);

    const userState  =  useSelector((state) =>  state.users);
    console.log(userState);


  return (
    <h1>Users</h1>
  )
    }

export default Users