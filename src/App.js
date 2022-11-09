import './App.css';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ProductDescription from './components/product/ProductDescription';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='product/:id' element={<ProductDescription/>}/>
      </Routes>        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
