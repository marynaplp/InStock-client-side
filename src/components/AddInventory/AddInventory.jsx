import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';
import './AddInventory.scss';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function AddInventory() {
    return(
        <main className="add-inventory">
            <section className="add-inventory__header">
                <img src={arrowIcon} alt='arrow-icon'/>
                <h1 className="add-inventory__title"> Add New Inventory Item</h1>
            </section>
            <form className='add-inventory__form' action="">
                <div className='add-inventory__form-container'>
                    <h2 className='add-inventory__form-header'>Item Details</h2>
                    <div className='add-inventory__form-input'>
                        <label htmlFor='itemName'>
                            <h3>Item Name</h3>
                        </label>
                        <input type='text' name='itemName' id='itemName' placeholder="Item Name" />
                    </div>
                    <div className='add-inventory__form-input'>
                        <label htmlFor='description'>
                            <h3>Description</h3>
                        </label>
                        <input type='text' name='description' id='description' placeholder="Please enter a brief item description..." />
                    </div>
                    <div className='add-inventory__form-input'>
                        <label htmlFor='category'>
                            <h3>Category</h3>
                        </label>
                        {/* <input type='text' name='category' id='category' placeholder="Please select" /> */}
                        <div className='add-inventory__select-menu'>
                            <select className='add-inventory__select'>
                                <option value="">Please select</option>
                                <option>2</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='add-inventory__form-container'>
                    <h2 className='add-inventory__form-header'>Item Availability</h2>
                    <div className='add-inventory__status-selector'>
                        <h3>Status</h3>
                        {/* <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="in stock"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="in stock" control={<Radio />} label="In stock" />
                            <FormControlLabel value="out of stock" control={<Radio />} label="Out of stock" />
                        </RadioGroup> */}
                        <div className='add-inventory__status-container'>
                            <label className='add-inventory__radio-container'>
                                <input type='radio'className='add-inventory__radio-btn' checked/> In stock
                            </label>
                            <label className='add-inventory__radio-container'>
                                <input type='radio' className='add-inventory__radio-btn'/> Out of stock
                            </label>
                        </div>
                    </div>
                    <div className='add-inventory__form-input'>
                            <h3>Quantity</h3>
                        <input type='text' name='quantity' id='quantity' placeholder="0" />
                    </div>
                    <div className='add-inventory__form-input'>
                        <label htmlFor='warehouse'>
                            <h3>Warehouse</h3>
                        </label>
                        <input type='text' name='warehouse' id='warehouse' placeholder="Please select" />
                    </div>
                </div>
                <div className="add-inventory__button-container">
                    <button className="add-inventory__cancel">Cancel</button>
                    <button className="add-inventory__add">+ Add Item</button>
                </div>
            </form>
        </main>
    )
}