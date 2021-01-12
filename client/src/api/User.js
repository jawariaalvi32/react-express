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
    const handleSearch = (e) => {
        let id = (e.target.parentNode.firstChild.value) ? e.target.parentNode.firstChild.value : 0
        Axios.get(`http://localhost:4000/api/users/${id}`) 
        .then((res) => {
        setUser(res.data)
    })
    }
    return (
        <>
        <div style={{display:"flex"}}>
            <input type="number" name="ID" placeholder="Search by ID"/>
            <button onClick={handleSearch}>Search</button>
        </div>
        {
            user.name ?  
            <p>Searched name : {user.name} and email is {user.email}</p>:
            <p></p>
        }
        </>
    )
}

export default User
