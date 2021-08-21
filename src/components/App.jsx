import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCount, setUsers} from "../reducers/reposReducer";
import ReposApi from "../api/repos.api";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.repos.count);
    const users = useSelector(state => state.repos.items);
    useEffect(() =>{
        ReposApi.getAllUsersAsync().then((users) => {
            console.log(users);
            dispatch(setUsers(users));
        })
    },[])

    const click=(count)=> {
        dispatch(setCount(count))
    }

    return (
        <div onClick={()=>click(5)}>
            Hello
            <p>{count}</p>
            {users?.map((item) => <div>{item.id}</div>)}
        </div>
    );
};

export default App;