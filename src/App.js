import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import WarehouseListPage from './pages/WarehouseListPage/WarehouseListPage';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />;
          <Route path="/Warehouse" element={<WarehouseListPage />} />;
          <Route path="/Edit-Warehouse" element="Edit-Warehouse" />;
          <Route path="/Add-Warehouse" element="Add-Warehouse" />;
          <Route path="/Delete-Warehouse" element="Delete-Warehouse" />;
          <Route path="/Inventory-Item" element="Inventory-Item" />;
          <Route path="/Edit-Inventory" element="Edit-Inventory" />;
          <Route path="/Add-Inventory" element="Add-Inventory" />;
          <Route path="/Delete-Inventory" element="Delete-Inventory" />;
          <Route path="/Delete-Inventory" element="Delete-Inventory-non" />;
        </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  );
}

export default App;
