import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from './pages/ProductDetail';
import { Header } from './components';
import { Search } from './pages/Search';
import { Filter } from './pages/Filter';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/search/:value" element={<Search />} />
        <Route path="/filter/:option/:value" element={<Filter />} />
      </Routes>
    </div>
  );
}

export default App;
