import { Routes, Route, BrowserRouter,} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Login from './LogIn';
import Products from './Products';
import AddProduct from "./AddProduct";

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
