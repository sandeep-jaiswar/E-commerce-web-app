import React, { useContext } from 'react';
import UserContext from '../userContext';

function Home(){
    const user = useContext(UserContext);
    return <div>{user!==null && user[0].email}</div>
}

export default Home