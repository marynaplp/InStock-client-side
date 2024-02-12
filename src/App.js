import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import WarehouseListPage from './pages/WarehouseListPage/WarehouseListPage';
import Header from './components/Header/Header';
import WarehouseDetail from './pages/WareHouseDetail/WarehouseDetail';
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AddInventory from './components/AddInventory/AddInventory';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import EditInventory from './components/EditInventory/EditInventory'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Warehouses" element={<WarehouseListPage />} />;
          <Route path="/EditWarehouse" element={<EditWarehouse/>} />;
          <Route path="/WarehouseDetail/:warehouseId" element={<WarehouseDetail/>} />;
          <Route path="/EditInventory" element={<EditInventory/>} />;
          <Route path="/Add-Warehouse" element={<AddWarehousePage />} />;
          <Route path="/Inventory" element={<InventoryPage/>} />;
          <Route path="/Inventory/:inventoryId" element={<ItemDetails/>} />;
          <Route path="/Add-Inventory" element={<AddInventory />} />;
          <Route path="/AddInventory" element={<AddInventory/>} />;
        </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  );
}

export default App;
