import './WarehouseCard.scss';
import trashcan from '../../../Assets/Icons/delete_outline-24px.svg';
import chevron from '../../../Assets/Icons/chevron_right-24px.svg'
import edit from '../../../Assets/Icons/edit-24px.svg';
import { Link } from 'react-router-dom';

function WarehouseCard({ warehouse }) {

    return (
        <section className="warehouse-card">
            <div className="warehouse-card__container">
                <div className="warehouse-card__container--left">
                    <h4 className="warehouse-card__header">Warehouse</h4>
                    <Link className="warehouse-card__location" to={`/WarehouseDetail/${warehouse.id}`}>
                        <p className="p2">{warehouse.warehouse_name}</p> <img  src={chevron} alt={warehouse.warehouse_name} />
                    </Link>
                    <h4 className="warehouse-card__header">Address</h4>
                    <p className="warehouse-card__street-address p2">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                </div>
                <div className="warehouse-card__container--right">
                    <h4 className="warehouse-card__header">Contact Name</h4>
                    <p className="warehouse-card__name p2">{warehouse.contact_name}</p>
                    <h4 className="warehouse-card__header">Contact Information</h4>
                    <div className="warehouse-card__contact">
                        <p className="warehouse-card__phone p2">{warehouse.contact_phone}</p>
                        <p className="warehouse-card__email p2">{warehouse.contact_email}</p>
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