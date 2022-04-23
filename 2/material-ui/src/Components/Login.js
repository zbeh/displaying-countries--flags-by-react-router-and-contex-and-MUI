import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import axios from 'axios'
export default function Login() {
    const [user, setUser] = useState()
    const{login}= useContext(AuthContext)
    const [token,setToken] = useState()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.from.pathname || '/'
    useEffect(()=>{
      axios.post('https://reqres.in/api/login',
      {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }
      )
      .then(res=> setToken(res.data))
    },[])
    const handleChange =(e) =>{
      const value=e.target.value; 
      setUser({...user,[e.target.name]:value})
    }
    console.log(user);
    console.log(token);
    const handleLogin =()=>{
      if(user.email==="eve.holt@reqres.in" && user.password==="cityslicka"){
        console.log("hi");
        login(user)
        localStorage.setItem("token",token.token)
        navigate(redirectPath , {replace:true})
      }
    }
     
    
  return (
    <div style={{display:"flex", justifyContent:"center", paddingTop:"7rem"}}>
      <div>
        <label style={{textAlign:"center"}}>Email:{' '}</label>
        <br/>
        <input type="email" name="email" onChange={handleChange}/>
        <br/>
        <label>password:{' '}</label>
        <br/>
        <input type="pasword" name="password" onChange={handleChange}/>
        <div style={{textAlign:"center", paddingTop:"2rem"}}>
          <Button variant="outlined"onClick={handleLogin}>Login</Button>
        </div>
      </div>
       
    </div>
  )
}
// michael.lawson@reqres.in
// Michael