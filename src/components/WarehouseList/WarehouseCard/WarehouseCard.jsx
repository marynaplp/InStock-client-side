import './WarehouseCard.scss';
import trashcan from '../../../Assets/Icons/delete_outline-24px.svg';
import chevron from '../../../Assets/Icons/chevron_right-24px.svg'
import edit from '../../../Assets/Icons/edit-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseCard() {
    return (
        <section className="warehouse-card">
            <div className="warehouse-card__container">
                <div className="warehouse-card__container--left">
                    <h4 className="warehouse-card__header">Warehouse</h4>
                    <Link className="warehouse-card__location">
                        <p className="p2">Manhattan</p> <img  src={chevron} alt="Manhattan" />
                    </Link>
                    <h4 className="warehouse-card__header">Address</h4>
                    <p className="warehouse-card__street-address p2">503 Broadway, New York, USA</p>
                </div>
                <div className="warehouse-card__container--right">
                    <h4 className="warehouse-card__header">Contact Name</h4>
                    <p className="warehouse-card__name p2">Parmin Aujla</p>
                    <h4 className="warehouse-card__header">Contact Information</h4>
                    <div className="warehouse-card__contact">
                        <p className="warehouse-card__phone p2">+1 629-555-0129</p>
                        <p className="warehouse-card__email p2">paujla@instock.com</p>
                    </div>
                </div>
            </div>
            <div className="warehouse-card__icons">
                <img className="warehouse-card__trashcan" src={trashcan} alt="Delete Warehouse" />
                <img className="warehouse-card__edit" src={edit} alt="Edit Warehouse" />
            </div>
        </section>
    )
}

export default WarehouseCard;