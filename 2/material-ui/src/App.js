import './App.css';
import Header from './Components/Header';
import SkillProvider  from './Context/SkillProvider';
import Main from './Components/Main';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
function App() {
  return (
    <div>
      <AuthProvider>
        <SkillProvider>
          <Routes>
            <Route path='/' element={<Header />} >
              <Route path='main' element={<Main />} />
              <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path='login' element={<Login />} />
            </Route>
            
          </Routes>
       
        </SkillProvider>
      </AuthProvider>

      
      
    </div>
  );
}

export default App;
