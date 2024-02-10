import './InventoryList.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
            <div>
                <h1>Inventory</h1>
                <div className='inventory-list__search-container'>
                    <input className="inventory-list__search" id="search" placeholder="Search..." type="text"/>
                    <button className="inventory-list__button">+Add New Item</button>
                </div>
            </div>
            <ul className='inventory-list__list'>
                
            </ul>

        </main>
    )
}