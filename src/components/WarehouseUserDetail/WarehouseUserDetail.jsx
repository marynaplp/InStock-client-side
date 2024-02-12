import Navigation from "../Navigation/Navigation";
import "./WarehouseUserDetail.scss";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

function WarehouseUserDetail() {
  const { warehouseId } = useParams();
  const { REACT_APP_API_BASE_PATH } = process.env;

  const [warehouseDetail, setwarehouseDetail] = useState([]);
  useEffect(() => {
    const url = `${REACT_APP_API_BASE_PATH}/api/warehouses/${warehouseId}`;
    
    const getAllWarehouses = async() => {
      try {
        const response = await axios.get(url);
        setwarehouseDetail(response.data);
      } catch (err) {
        alert("Error: No warehouse with that id exists.", err);
      }
    };
    getAllWarehouses();
  }, []);

  return (
    <div className="Warehouse">
      <Navigation
      value = {warehouseDetail}
      />
      <div className="Warehouse__Detail">
        <div className="Warehouse__Detail-address">
          <h4 className="Warehouse__Detail-header">warehouse address:</h4>
          <span>
          {warehouseDetail.address},
            <br className="break__line" />{warehouseDetail.city} {warehouseDetail.country}
          </span>
        </div>
        <div className="Warehouse__Detail-contact">
          <div className="Warehouse__Detail-section">
            <h4 className="Warehouse__Detail-header">Contact name:</h4>
            <span>{warehouseDetail.contact_name}</span>
            <br></br>
            <span>Warehouse Manager</span>
          </div>
          <div className="WareHouse__Detail-section">
            <h4 className="Warehouse__Detail-header">Contact information:</h4>
            <span>{warehouseDetail.contact_phone}</span>
            <br></br>
            <span>{warehouseDetail.contact_email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseUserDetail;
