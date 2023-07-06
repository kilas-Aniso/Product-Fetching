import { Routes, Route, BrowserRouter,} from 'react-router-dom';
// import './App.css';
import Login from './LogIn';
import Products from './Products';
import ProductDetails from './ProductDetails';
import AddProduct from "./AddProduct";

function App() {
  return (
    <div>
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
