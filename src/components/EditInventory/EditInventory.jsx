import arrowIcon from "../../Assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function EditInventory() {
  const navigate = useNavigate();
  const location = useLocation();
  let item = location.state.item || {};
  const { REACT_APP_API_BASE_PATH } = process.env

  const categories = [
    { label: "Please select", value: "" },
    { label: "Electronics", value: "Electronics" },
    { label: "Gear", value: "Gear" },
    { label: "Apparel", value: "Apparel" },
    { label: "Accessories", value: "Accessories" },
    { label: "Health", value: "Health" },
  ];

  const countries = [
    { label: "Please select", value: "" },
    { label: "Miami", value: "Miami" },
    { label: "Seattle", value: "Seattle" },
    { label: "Santa Monica", value: "Santa Monica" },
    { label: "SF", value: "SF" },
    { label: "Jersey", value: "Jersey" },
    { label: "Washington", value: "Washington" },
    { label: "Manhattan", value: "Manhattan" },
  ];

  const [itemName, setItemName] = useState({
    itemName: item.item_name || "",
    description: item.description || "",
    category: item.category || "",
    status: item.status || "In stock",
    warehouse_name: item.warehouse_name || "",
  });

  const handleItemNameChange = (e) => {
    const { name, value } = e.target;
    setItemName((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {

    const url = `${REACT_APP_API_BASE_PATH}/inventory/${item.id}`

    e.preventDefault();
    const updatedItem = {
      id:item.id,
      itemName: itemName.itemName,
      description: itemName.description,
      category: itemName.category,
      status: itemName.status,
      warehouseName: itemName.warehouse_name, 
    };
   

    try {
      const response = await axios.put(url,updatedItem);
      console.log("value from server",response.data);
  } catch(error) {
      alert("Error: No inventory with that id exists.", error)
      console.log(error);
  }
  handleBackClick();

  };

  const handleBackClick = () => {
    navigate("/Inventory");
  };

  return (
    <main className="Edit-inventory">
      <section className="Edit-inventory__header">
        <img src={arrowIcon} alt="arrow-icon" onClick={handleBackClick} />
        <h1 className="Edit-inventory__title"> Edit Inventory Item</h1>
      </section>
      <form action="" onSubmit={handleSubmit}>
        <div className="Edit-inventory__form">
          <div className="Edit-inventory__form-container Edit-inventory__form-container--left">
            <div className="Edit-inventory__divider">
              <h2 className="Edit-inventory__form-header">Item Details</h2>
              <div className="Edit-inventory__form-input">
                <label htmlFor="itemName">
                  <h3 className="Edit-inventory__label">Item Name</h3>
                </label>
                <input
                  type="text"
                  className="Edit-inventory__text-color"
                  name="itemName"
                  id="itemName"
                  placeholder="Item Name"
                  value={itemName.itemName}
                  onChange={handleItemNameChange}
                />
              </div>
              <div className="Edit-inventory__form-input">
                <label htmlFor="description">
                  <h3 className="Edit-inventory__label">Description</h3>
                </label>
                <input
                  type="text"
                  name="description"
                  className="Edit-inventory__text-color"
                  id="description"
                  placeholder="Please enter a brief item description..."
                  value={itemName.description}
                  onChange={handleItemNameChange}
                />
              </div>
              <div className="Edit-inventory__form-input">
                <label htmlFor="category">
                  <h3 className="Edit-inventory__label">Category</h3>
                </label>
                <div className="Edit-inventory__select-menu">
                  <select
                    name="category"
                    className="Edit-inventory__select"
                    value={itemName.category}
                    onChange={handleItemNameChange}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="Edit-inventory__form-container">
            <h2 className="Edit-inventory__form-header">Item Availability</h2>
            <div className="Edit-inventory__form-input">
              <h3 className="Edit-inventory__label">Status</h3>
              <div className="Edit-inventory__status-container">
                <label className="Edit-inventory__radio-container">
                  <input
                    type="radio"
                    name="status"
                    className="Edit-inventory__radio-btn"
                    value="In Stock"
                    checked={itemName.status === "In Stock"}
                    onChange={handleItemNameChange}
                  />
                  In stock
                </label>
                <label className="Edit-inventory__radio-container">
                  <input
                    type="radio"
                    name="status"
                    className="Edit-inventory__radio-btn"
                    value="Out of Stock"
                    checked={itemName.status === "Out of Stock"}
                    onChange={handleItemNameChange}
                  />
                  Out of stock
                </label>
              </div>
            </div>
            <div className="Edit-inventory__form-input">
              <label htmlFor="warehouse">
                <h3 className="Edit-inventory__label">Warehouse</h3>
              </label>
              <div className="Edit-inventory__select-menu">
                <select
                  className="Edit-inventory__select"
                  name="warehouse_name"
                  value={itemName.warehouse_name}
                  onChange={handleItemNameChange}
                >
                  {countries.map((countries) => (
                    <option key={countries.value} value={countries.value}>
                      {countries.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="Edit-inventory__button-container">
          <button className="Edit-inventory__cancel" onClick={handleBackClick}>
            Cancel
          </button>
          <button className="Edit-inventory__add" type="submit">
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
