import React, { useContext } from 'react'
import { Navigate, useLocation} from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

export default function RequireAuth({children}) {
  const {user } = useContext(AuthContext)
  const location = useLocation()
  if(!user){
    return <Navigate to="/login" state={{from:location}} replace/>
  }
  return (
    children
  )
}
