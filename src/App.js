import { useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from "./AppContext";
import Authenticate from './components/Authenticate';
import Navbar from './components/navbar/Navbar';
import Header from "./components/Header";
import Home from './components/home/Home';
import ProductDescription from './components/product/ProductDescription';
import Register from './components/register';
import Logout from './components/logout';


function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div className="App">
      <Navbar/>
      <AppProvider currentUser={currentUser}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        
        <Route path='login' element={<Authenticate/>}/>
        <Route path='signup' element={<Register/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='product/:id' element={<ProductDescription/>}/>        
        <Route path='logout' element={<Logout/>}/>
      </Routes>        
      </BrowserRouter>
      </AppProvider>
      
    </div>
  );
}

export default App;
