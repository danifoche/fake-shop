// Components
import HomePage from "./pages/homepage/HomePage";
import ProductsList from "./pages/productsList/ProductsList";
import ProductInfo from "./pages/productInfo/ProductInfo";

// Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/products" element={ <ProductsList /> } />
      <Route path="/products/:id" element={ <ProductInfo /> } />
    </Routes>
  );
}

export default App;
