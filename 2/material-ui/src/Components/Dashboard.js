import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

export default function Dashboard() {
    const {user, logout}= useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () =>{
       logout()
       navigate('/main')
    }
  return (
    <div style={{paddingTop:"9rem", textAlign:"center"}}>
       <h1> Welcome {user.email}</h1>
       <Button variant="outlined"onClick={handleLogout}>Logout</Button>
        </div>
  )
}
