import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';
import './AddInventory.scss';
import axios from 'axios';

export default function AddInventory() {
    
    const { REACT_APP_API_BASE_PATH } = process.env;
    // const formRef = useRef()
    const [inventory, setInventory] = useState([])
    const navigate = useNavigate()

    // const handleClick = (e) => {
    //     e.preventDefault()
    // }

    // const addInventory = async (e) => {
    //     e.preventDefault()
    //     const newInventoryData = {
    //         itemName: formRef.current.itemName.value,
    //         description: formRef.current.description.value,
    //     }
    //     e.target.reset()
    //     try {
    //         const url = `${REACT_APP_API_BASE_PATH}/EditInventory}`
    //         let newInventory = await axios.post(url, newInventoryData)
    //         setInventory([...inventory, newInventory])
    //         navigate('/inventory')
    //     } catch(error) {
    //         console.error(error)
    //     }
    // }

    const [ categoryOptions, setCategoryOptions ] = useState([])
    const [ warehouseOptions, setWarehouseOptions ] = useState([])

    useEffect(() => {
        const url = `${REACT_APP_API_BASE_PATH}/inventory`
        const getAllInventories = async() => {
            try {
                const response = await axios.get(url)
                // 1. Get array of categories

                const categories = response.data.map((inventory) => {
                    return inventory.category
                })


                const warehouses = response.data.map((inventory) => {
                    return inventory.warehouse_name
                })

                // 2. Put array of categories in a Set

                const categorySet = new Set(categories)
                const warehouseSet = new Set(warehouses)

                // 3. Transform it back to array


                setCategoryOptions([...categorySet]) 
                setWarehouseOptions([...warehouseSet])
            } catch(error) {
                alert("Error: No inventory with that id exists.", error)
            }
        }
        getAllInventories()
    }, [])


    return(
        <main className="add-inventory">
            <section className="add-inventory__header">
                <img src={arrowIcon} alt='arrow-icon'/>
                <h1 className="add-inventory__title"> Add New Inventory Item</h1>
            </section>
            <form className='add-inventory__form' action="">
                <div className='add-inventory__form-container add-inventory__form-container--left'>
                    <div className='add-inventory__divider'>
                        <h2 className='add-inventory__form-header'>Item Details</h2>
                        <div className='add-inventory__form-input'>
                            <label htmlFor='itemName'>
                                <h3 className='add-inventory__label'>Item Name</h3>
                            </label>
                            <input type='text' name='itemName' id='itemName' placeholder="Item Name" />
                        </div>
                        <div className='add-inventory__form-input'>
                            <label htmlFor='description'>
                                <h3 className='add-inventory__label'>Description</h3>
                            </label>
                            <input type='text' name='description' id='description' placeholder="Please enter a brief item description..." />
                        </div>
                        <div className='add-inventory__form-input'>
                            <label htmlFor='category'>
                                <h3 className='add-inventory__label'>Category</h3>
                            </label>
                            <div className='add-inventory__select-menu'>
                                <select className='add-inventory__select'>
                                    <option value="">Please select</option>
                                    {categoryOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='add-inventory__form-container'>
                    <h2 className='add-inventory__form-header'>Item Availability</h2>
                    <div className='add-inventory__form-input'>
                        <h3 className='add-inventory__label'>Status</h3>
                        <div className='add-inventory__status-container'>
                            <label className='add-inventory__radio-container'>
                                <input type='radio'className='add-inventory__radio-btn'/> In stock
                            </label>
                            <label className='add-inventory__radio-container'>
                                <input type='radio' className='add-inventory__radio-btn'/> Out of stock
                            </label>
                        </div>
                    </div>
                    <div className='add-inventory__form-input'>
                            <h3 className='add-inventory__label'>Quantity</h3>
                        <input type='text' name='quantity' id='quantity' placeholder="0" />
                    </div>
                    <div className='add-inventory__form-input'>
                        <label htmlFor='warehouse'>
                            <h3 className='add-inventory__label'>Warehouse</h3>
                        </label>
                        <div className='add-inventory__select-menu'>
                            <select className='add-inventory__select'>
                                <option value="">Please select</option>
                                    {warehouseOptions.map((warehouse, index) => (
                                        <option key={index} value={warehouse}>{warehouse}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <div className="add-inventory__button-container">
                <button className="add-inventory__cancel">Cancel</button>
                <button className="add-inventory__add">+ Add Item</button>
            </div>
        </main>
    )
}