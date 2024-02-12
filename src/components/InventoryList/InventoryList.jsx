import './InventoryList.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import InventoryCard from './InventoryCard/InventoryCard';
import sort from '../../Assets/Icons/sort-24px.svg';
import { Link } from 'react-router-dom';

export default function InventoryList() {

    const { REACT_APP_API_BASE_PATH } = process.env
    
    const [ inventories, setInventories ] = useState([])

    useEffect(() => {
        const url = `${REACT_APP_API_BASE_PATH}/api/inventories`

        const getAllInventories = async() => {
            try {
                const response = await axios.get(url)
                setInventories(response.data)
            } catch(error) {
                alert("Error: No inventory with that id exists.", error)
            }
        }
        getAllInventories()
    }, [])

    return (
        <main className="inventory-list">
            <div className="inventory-list__header">
                <h1 className='inventory-list__page-title'>Inventory</h1>
                <div className='inventory-list__search-container'>
                    <input className="inventory-list__search" id="search" placeholder="Search..." type="text"/>
                    <Link to={`/Add-Inventory`}><button className="inventory-list__button">+Add New Item</button></Link>
                </div>
            </div>
            <div className="inventory-list__list-headers">
                <h4 className="inventory-list__row-heading">INVENTORY ITEM <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="inventory-list__row-heading">CATEGORY <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="inventory-list__row-heading">STATUS <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="inventory-list__row-heading">QTY <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="inventory-list__row-heading">WAREHOUSE <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="inventory-list__row-heading">Actions</h4>
            </div>
            <ul className='inventory-list__list'>
                {inventories.map((item) => {
                    return (
                        <InventoryCard
                            key={item.id}
                            item={item}
                        /> 
                    )
                })}
            </ul>
        </main>
    )
}