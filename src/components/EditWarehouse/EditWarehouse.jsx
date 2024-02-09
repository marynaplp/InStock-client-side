


import './EditWarehouse.scss';
import BackArrow from '../../Assets/Icons/arrow_back-24px.svg';

function EditWarehouse() {
    return (
        <main className="Edit-warehouse">
            <section className="Edit-warehouse__header">
                <h1 className="Edit-warehouse__title"><img src={BackArrow} alt="arrow-back"/> Edit Warehouse</h1>
            </section>

            {/* FORM BEGINS HERE */}
            <form className="Edit-warehouse__form" action="">

                <div className="form__container">
                    {/* WAREHOUSE DETAILS */}
                    <div className="form__warehouse">
                        <h2 className="form__header">Warehouse Details</h2>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 class="form__label">Warehouse Name</h3>
                            </label>
                            <input placeholder="Warehouse Name" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Street Address</h3>
                            </label>
                            <input placeholder="Street Address" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">City</h3>
                            </label>
                            <input placeholder="City" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Country</h3>
                            </label>
                            <input placeholder="Country" />
                        </div>
                    </div>
                    {/* CONTACT DETAILS */}
                    <div className="form__contact">
                        <h2 className="form__header">Contact Details</h2>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Contact Name</h3>
                            </label>
                            <input placeholder="Contact Name" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Position</h3>
                            </label>
                            <input placeholder="Position" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Phone Number</h3>
                            </label>
                            <input placeholder="Phone Number" />
                        </div>
                        <div className="form__input">
                            <label htmlFor="">
                                <h3 className="form__label">Email</h3>
                            </label>
                            <input placeholder="Email" />
                        </div>
                    </div>
                </div>
                <div className="form__button-container">
                    <button className="form__cancel">Cancel</button>
                    <button className="form__add">Save</button>
                </div>
            </form>
        </main>
    )
}

export default EditWarehouse;