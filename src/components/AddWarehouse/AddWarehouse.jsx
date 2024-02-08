import './AddWarehouse.scss';
import back from '../../Assets/Icons/arrow_back-24px.svg';

function AddWarehouse() {
    return (
        <main className="add-warehouse">
            <section className="add-warehouse__header">
                <h1 className="add-warehouse__title"><img src={back} /> Add New Warehouse</h1>
            </section>

            {/* FORM BEGINS HERE */}
            <form className="add-warehouse__form" action="">

                {/* WAREHOUSE DETAILS */}
                <div className="form__warehouse">
                    <h2 className="form__header">Warehouse Details</h2>
                    <div className="form__input">
                        <label htmlFor="">
                            <h3 className="form__label">Warehouse Name</h3>
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
            </form>
        </main>
    )
}

export default AddWarehouse;