import './InventoryList.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import chevron from '../../Assets/Icons/chevron_right-24px.svg';
import InventoryCard from './InventoryCard/InventoryCard';

export default function InventoryList() {

    const { REACT_APP_API_BASE_PATH } = process.env
    
    const [ inventories, setInventories ] = useState([])

    useEffect(() => {
        const url = `${REACT_APP_API_BASE_PATH}/inventory`

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
                    <button className="inventory-list__button">+Add New Item</button>
                </div>
            </div>
            <InventoryCard/>

            {/* <section className='inventory-list__list'>
                <div className="inventory-list__list-container">
                    <div className="inventory-list__container-info">
                        <h4 className="inventory-list__header">Inventory Item</h4>
                        <div className="inventory-list__inventory-item">
                            <p className="inventory-list__item">Television</p> <img  src={chevron} alt='chevron' />
                        </div>
                        <h4 className="inventory-list__header">CATEGORY</h4>
                        <p className="inventory-list__item">electronics</p>
                    </div>
                    <div className="inventory-list__container-info">
                        <h4 className="inventory-list__header">Status</h4>
                        <p className="inventory-list__item-status">In stock</p>
                        <h4 className="inventory-list__header">QTY</h4>
                        <p className="inventory-list__item">500</p>
                        <h4 className="inventory-list__header">WAREHOUSE</h4>
                        <p className="inventory-list__item">Manhattan</p>
                    </div>
                </div>
            </section> */}

        </main>
    )
}