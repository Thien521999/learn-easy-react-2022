import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
