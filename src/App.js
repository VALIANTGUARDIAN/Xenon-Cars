import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <Route path='/' component={<Home/>} exact/>
        <Route path='/product/:id' component={<ProductDescription/>} exact/>
      </Routes>        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
