import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import WarehouseListPage from './pages/WarehouseListPage/WarehouseListPage';
import Header from './components/Header/Header';
import WarehouseDetail from './pages/WareHouseDetail/WarehouseDetail';
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AddInventory from './components/AddInventory/AddInventory';
import EditWarehousePage from './pages/EditWarehousePage/EditWarehousePage';
// import InventoryList from './components/InventoryList/InventoryList';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import EditInventory from './components/EditInventory/EditInventory'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />;
          <Route path="/Warehouse" element={<WarehouseListPage />} />;
          <Route path="/WarehouseDetail" element={<WarehouseDetail/>} />;
          <Route path="/EditWarehouse" element={<EditWarehousePage/>} />;
          <Route path="/WarehouseDetail/:warehouseId" element={<WarehouseDetail/>} />;
          <Route path="/EditInventory" element={<EditInventory/>} />;
          <Route path="/Add-Warehouse" element={<AddWarehousePage />} />;
          <Route path="/Delete-Warehouse" element="Delete-Warehouse" />;



          
          <Route path="/Inventory" element={<InventoryPage/>} />;
          <Route path="/Inventory/:inventoryId" element={<ItemDetails/>} />;
         

          <Route path="/Add-Inventory" element="Add-Inventory" />;

           <Route path="/Delete-Inventory" element="Delete-Inventory" />;
          <Route path="/Delete-Inventory" element="Delete-Inventory-non" /> 
          <Route path="/AddInventory" element={<AddInventory/>} />;
          <Route path="/Delete-Inventory" element="Delete-Inventory" />;
          <Route path="/Delete-Inventory" element="Delete-Inventory-non" />;
        </Routes>
        <Footer />
      </div>
   </BrowserRouter>
  );
}

export default App;
