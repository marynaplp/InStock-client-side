import './EditWarehouse.scss';
import BackArrow from '../../Assets/Icons/arrow_back-24px.svg';
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function EditWarehouse() {
    const navigate = useNavigate();
    const location = useLocation();

    let warehouse = location.state.warehouse || {};
  
    const { REACT_APP_API_BASE_PATH } = process.env

    const [formValue, setformValue] = useState({
   
      warehouse_name : warehouse.warehouse_name || "",
      address: warehouse.address|| "",
      city: warehouse.city || "",
      country: warehouse.country|| "",
      contact_name: warehouse.contact_name|| "",
      contact_position: warehouse.contact_position || "",
      contact_phone: warehouse.contact_phone || "",
      contact_email: warehouse.contact_email || "",
      });
      const handleValueChange = (e) => {
        const { name, value } = e.target;
        setformValue((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      const handleSubmit = async(e) => {
        const url = `${REACT_APP_API_BASE_PATH}/api/warehouses/${warehouse.id}`

        e.preventDefault();
        const updateValue = {
          id: warehouse.id,
          warehouse_name : formValue.warehouse_name,
          address: formValue.address,
          city: formValue.city,
          country: formValue.country,
          contact_name: formValue.contact_name,
          contact_position: formValue.contact_position,
          contact_phone: formValue.contact_phone,
          contact_email: formValue.contact_email,
        };

        try {
            const response = await axios.put(url,updateValue);
        } catch(error) {
            alert("Error: No inventory with that id exists.", error)
            console.error(error);
        }
        handleBackClick();
      
      };
      const handleBackClick = () => {
        navigate("/Warehouses");
      };

    return (
        <main className="Edit-warehouse">
            <section className="Edit-warehouse__header">
                <h1 className="Edit-warehouse__title">
                    <img src={BackArrow} alt="arrow-back" onClick={handleBackClick}/> Edit Warehouse</h1>
            </section>

            {/* FORM BEGINS HERE */}
            <form className="Edit-warehouse__form" action="" onSubmit={handleSubmit}>

                <div className="form__container">
                    {/* WAREHOUSE DETAILS */}
                    <div className="form__warehouse">
                        <h2 className="form__header">Warehouse Details</h2>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Warehouse Name</h3>
                            </label>
                            <input
                            name="warehouse_name"
                            id="warehouse_name"
                            placeholder="Warehouse Name"
                            value={formValue.warehouse_name}
                            onChange={handleValueChange}
                            />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Street Address</h3>
                            </label>
                            <input 
                            placeholder="Street Address"
                            name="address"
                            id="address"
                            value={formValue.address}
                            onChange={handleValueChange}
                            /> 
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">City</h3>
                            </label>
                            <input 
                            placeholder="City"
                            name="city"
                            id="city"
                            value={formValue.city}
                            onChange={handleValueChange}
                             />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Country</h3>
                            </label>
                            <input 
                            placeholder="country"
                            name="country"
                            id="country"
                            value={formValue.country}
                            onChange={handleValueChange}
                             />
                        </div>
                    </div>
                   
                    <div className="form__contact">
                        <h2 className="form__header">Contact Details</h2>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Contact Name</h3>
                            </label>
                            <input 
                            placeholder="Contact Name"
                            name="contact_name"
                            id="contact_name"
                            value={formValue.contact_name}
                            onChange={handleValueChange} />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Position</h3>
                            </label>
                            <input 
                            placeholder="Position"
                            name="contact_position"
                            id="contact_position"
                            value={formValue.contact_position}
                            onChange={handleValueChange} />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Phone Number</h3>
                            </label>
                            <input 
                            placeholder="Phone Number"
                            name="contact_phone"
                            id="contact_phone"
                            value={formValue.contact_phone}
                            onChange={handleValueChange} />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Email</h3>
                            </label>
                            <input 
                            placeholder="Email"
                            name="contact_email"
                            id="contact_email"
                            value={formValue.contact_email}
                            onChange={handleValueChange} />
                        </div>
                    </div>
                </div>
                <div className="form__button-container">
                    <button className="form__cancel" onClick={handleBackClick}>Cancel</button>
                    <button className="form__add" type="submit">Save</button>
                </div>
            </form>
        </main>
    )
}

export default EditWarehouse;