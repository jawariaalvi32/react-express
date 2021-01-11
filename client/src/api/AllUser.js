import React, {useEffect, useState} from 'react';
import Axios from 'axios'

const AllUser = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
      Axios.get(`http://localhost:4000/api/users`) 
       .then((res) => {
         setUsers(res.data)
      })
  },[])
    return (
        <div>
            <table>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                </tr>
                <tbody>
                {
                users.map(
                    (user) => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
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
