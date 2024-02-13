import WarehouseCard from './WarehouseCard/WarehouseCard';
import './WarehouseList.scss';
import sort from '../../Assets/Icons/sort-24px.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WarehouseList() {

    const { REACT_APP_API_BASE_PATH } = process.env;

    const [ allWarehouses, setAllWarehouses ] = useState([]);

    useEffect(() => {
        const url = `${REACT_APP_API_BASE_PATH}/api/warehouses`;

        const getAllWarehouses = async() => {
            try {
                const response = await axios.get(url)
                setAllWarehouses(response.data)
            } catch(err) {
                alert("Error: No warehouse with that id exists.", err)
            }
        }
        getAllWarehouses();

    }, [])


    return (
        <main className="warehouse-list">
            <div className="warehouse-list__header">
                <h1 className="warehouse-list__title">Warehouses</h1>
                <div className="warehouse-list__search-container">
                    <input className="warehouse-list__search" placeholder="Search..." type="text" />
                    <Link className="warehouse-list__button-link" to={`/Add-Warehouse`}>
                    <button className="warehouse-list__button">+ Add New Warehouse</button>
                    </Link>
                </div>
            </div>
            <div className="warehouse-list__list-headers">
                <h4 className="warehouse-list__row-heading row-warehouse">Warehouse <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-address">Address <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-name">Contact Name <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-contact">Contact Information <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-actions">Actions</h4>
            </div>
            <ul className="warehouse-list__list">
                {allWarehouses.map((warehouse) => {
                        return ( 
                            <WarehouseCard 
                                    key={warehouse.id}
                                    warehouse={warehouse} 
                                />
                        )
                    })}
            </ul>
        </main>
    )
}

export default WarehouseList;