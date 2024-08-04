
import React from 'react';
import {BrowserRouter,Routes,Route, Navigate,}  from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile';
import HomeTemplate from './templtes/HomeTemplate';



function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <div className="App" >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ProtectionRoute><Home/></ProtectionRoute>}/>
      <Route path='/home' element={<ProtectionRoute><Home/></ProtectionRoute>}/>
      <Route path='/profile' element={<ProtectionRoute><Profile/></ProtectionRoute>}/>
      <Route path='/templates/:id' element={<ProtectionRoute><HomeTemplate/></ProtectionRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>




      </Routes>
      </BrowserRouter>

     </div>
    
  )
}

export default App

// protected Routes

function ProtectionRoute({ children}) {
  const isAuthenticated = localStorage.getItem("token");
  // eslint-disable-next-line react/prop-types
  return isAuthenticated ? children : <Navigate to="/login" />;
}
