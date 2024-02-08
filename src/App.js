import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import WarehouseListPage from './pages/WarehouseListPage/WarehouseListPage';
import Header from './components/Header/Header';
import WarehouseDetail from './pages/WareHouseDetail/WarehouseDetail';
import ItemDetails from './components/ItemDetails/ItemDetails';


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />;
          <Route path="/Warehouse" element={<WarehouseListPage />} />;
          <Route path="/WarehouseDetail" element={<WarehouseDetail/>} />;
          <Route path="/Edit-Warehouse" element="Edit-Warehouse" />;
          <Route path="/Add-Warehouse" element="Add-Warehouse" />;
          <Route path="/Delete-Warehouse" element="Delete-Warehouse" />;
          <Route path="/Inventory-Item" element={<ItemDetails/>} />;
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
