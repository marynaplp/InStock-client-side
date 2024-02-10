import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';
import './EditInventory.scss';




export default function EditInventory() {

    return (
      <main className="Edit-inventory">
        <section className="Edit-inventory__header">
          <img src={arrowIcon} alt="arrow-icon" />
          <h1 className="Edit-inventory__title"> Edit Inventory Item</h1>
        </section>
        <form className="Edit-inventory__form" action="">
          <div className="Edit-inventory__form-container Edit-inventory__form-container--left">
            <div className="Edit-inventory__divider">
              <h2 className="Edit-inventory__form-header">Item Details</h2>
              <div className="Edit-inventory__form-input">
                <label htmlFor="itemName">
                  <h3 className="Edit-inventory__label">Item Name</h3>
                </label>
                <input
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="Item Name"
                />
              </div>
              <div className="Edit-inventory__form-input">
                <label htmlFor="description">
                  <h3 className="Edit-inventory__label">Description</h3>
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Please enter a brief item description..."
                />
              </div>
              <div className="Edit-inventory__form-input">
                <label htmlFor="category">
                  <h3 className="Edit-inventory__label">Category</h3>
                </label>
                <div className="Edit-inventory__select-menu">
                  <select className="Edit-inventory__select">
                    <option value="">Please select</option>
                    <option>2</option>
                    <option>1</option>
                    <option>1</option>
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
                    className="Edit-inventory__radio-btn"
                    checked
                  />
                  In stock
                </label>
                <label className="Edit-inventory__radio-container">
                  <input type="radio" className="Edit-inventory__radio-btn" />{" "}
                  Out of stock
                </label>

              </div>
            </div>
            <div className="Edit-inventory__form-input">
              <label htmlFor="warehouse">
                <h3 className="Edit-inventory__label">Warehouse</h3>
              </label>
              <div className="Edit-inventory__select-menu">
                <select className="Edit-inventory__select">
                  <option value="">Please select</option>
                  <option>2</option>
                  <option>1</option>
                  <option>1</option>
                </select>
              </div>
            </div>
          </div>
        </form>
        <div className="Edit-inventory__button-container">
          <button className="Edit-inventory__cancel">Cancel</button>
          <button className="Edit-inventory__add">+ Add Item</button>
        </div>
      </main>
    );
}