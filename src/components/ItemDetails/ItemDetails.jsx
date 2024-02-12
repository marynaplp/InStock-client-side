import './ItemDetails.scss';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';
import EditButton from '../Button/EditButton/EditButton';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ItemDetails() {
    const navigate = useNavigate();

    const { REACT_APP_API_BASE_PATH } = process.env;

    const [ inventory, setInventory ] = useState([]);
    const {inventoryId} = useParams()

  

    useEffect(() => {
        const getInventoryDetails = async(inventoryId) => {
            if (inventoryId == null) {
                return
            }
            try {
                const url = `${REACT_APP_API_BASE_PATH}/inventory/${inventoryId}`;
                const response = await axios.get(url)
                setInventory(response.data)
            } catch(err) {
                alert("Error: No inventory with that id exists.", err)
            }
        }
        getInventoryDetails(inventoryId);

    }, [inventoryId])

    const handleEditClick = () => {
        const item = inventory;
        navigate("/Editinventory",{ state: { item } });
      };

      console.log(inventory.status)
    return (
        <section className='item'>
            <div className='item__container'>
                <section className='item__header-container'>
                    <Link to={`/inventory`}>
                        <div className='item__header-title'>
                            <img src={arrowIcon} alt='arrow-icon' />
                            <h1 className='item__item-title'>Television</h1>
                        </div>
                    </Link>
                    <EditButton
                    onClick={handleEditClick}
                    />
                </section>
                <section className='item__info-container'>
                    <div className='item__description-box'>
                        <h4 className='item__title item__title--active'>ITEM DESCRIPTION:</h4>
                        <p className='item__data item__data--active'>{inventory.description}</p>
                        <h4 className='item__title'>CATEGORY:</h4>
                        <p className='item__data'>{inventory.category}</p>
                    </div>
                    <div className='item__warehouse-info'>
                        <div className='item__inventory-container'>
                            <div className='item__inventory-status'>
                                <h4 className='item__title'>STATUS:</h4>
                                <p className={`item__status ${inventory.status == 'Out of Stock' ? 'item__status--out-of-stock' : ''}`}>
                                    {(inventory.status || 'Not Available').toUpperCase()}
                                </p>
                            </div>
                            <div className='item__inventory-status'>
                                <h4 className='item__title'>QUANTITY:</h4>
                                <p className='item__data'>{inventory.quantity}</p>
                            </div>
                        </div>
                        <h4 className='item__title'>WAREHOUSE:</h4>
                        <p className='item__data'>{inventory.warehouse_name}</p>
                    </div>
                </section>
            </div>
        </section>
    )
}