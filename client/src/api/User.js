import React, {useState, useEffect} from 'react'
import Axios from 'axios'
const User = () => {

  const [user,setUser] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:4000/api/users/1`) 
     .then((res) => {
       setUser(res.data)
    })
},[])
    return (
        <div>
            <p>Your name : {user.name} and email is {user.email}</p>
        </div>
    )
}

export default User
