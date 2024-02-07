import './WarehouseCard.scss';
import trashcan from '../../../Assets/Icons/delete_outline-24px.svg';
import edit from '../../../Assets/Icons/edit-24px.svg';

function WarehouseCard() {
    return (
        <section className="warehouse-card">
            <div className="warehouse-card__container">
                <div className="warehouse-card__container--left">
                    <div className="warehouse-card__warehouse">
                        <h4 className="warehouse-card__header">Warehouse</h4>
                        <p className="warehouse-card__location p2">Manhattan</p>
                    </div>
                    <div className="warehouse-card__address">
                        <h4 className="warehouse-card__header">Address</h4>
                        <p className="warehouse-card__address p2">503 Broadway, New York, USA</p>
                    </div>
                </div>
                <div className="warehouse-card__container--right">
                    <div className="warehouse-card__contact-name">
                        <h4 className="warehouse-card__header">Contact Name</h4>
                        <p className="warehouse-card__name p2">Parmin Aujla</p>
                    </div>
                    <div className="warehouse-card__contact-info">
                        <h4 className="warehouse-card__header">Contact Information</h4>
                        <p className="warehouse-card__phone p2">+1 629-555-0129</p>
                        <p className="warehouse-card__email p2">paujla@instock.com</p>
                    </div>
                </div>
            </div>
            <div className="warehouse-card__icons">
                <img src={trashcan} alt="Delete Warehouse" />
                <img src={edit} alt="Edit Warehouse" />
            </div>
        </section>
    )
}

export default WarehouseCard;