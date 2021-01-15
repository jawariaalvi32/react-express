import React, {useEffect, useState} from 'react';
import Axios from 'axios'
import User from './User';

const AllUser = () => {
    const [users,setUsers] = useState([
        {name:'Faiza',id:1,email:'faz.pak@gmail.com',password:'1111'},
        {name:'Abeer',id:2,email:'abeer@gmail.com',password:'2222'}   
    ])
    useEffect(() => {
      Axios.get(`http://localhost:4000/api/users`) 
       .then((res) => {
           console.log(res)
         setUsers(res.data.data)
      })
  },[])
  console.log(users)
    return (
        <div>
            <User/>
            <table style={{margin: "auto"}}>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                </tr>
                <tbody>
                {
                users.map(
                    (user, ind) => (
                    <tr key={user.id}>
                    <td>{ind + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.pwd}</td>
                    </tr>
                    )
                )
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllUser
