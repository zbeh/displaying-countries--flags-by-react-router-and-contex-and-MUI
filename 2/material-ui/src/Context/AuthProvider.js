import React, { createContext , useState} from 'react'
export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const login = (user)=>{
        setUser(user)
    }
    const logout = ()=>{
        setUser(null)
    }
  return (
     <AuthContext.Provider value={{user, login, logout}}>
         {children}
     </AuthContext.Provider>
  )
}
