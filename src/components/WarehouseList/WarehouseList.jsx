import WarehouseCard from './WarehouseCard/WarehouseCard';
import './WarehouseList.scss';
import sort from '../../Assets/Icons/sort-24px.svg';

function WarehouseList() {
    return (
        <main className="warehouse-list">
            <div className="warehouse-list__header">
                <h1 className="warehouse-list__title">Warehouses</h1>
                <div className="warehouse-list__search-container">
                    <input className="warehouse-list__search" placeholder="Search..." type="text" />
                    <button className="warehouse-list__button">+ Add New Warehouse</button>
                </div>
            </div>
            <div className="warehouse-list__list-headers">
                <h4 className="warehouse-list__row-heading row-warehouse">Warehouse <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-address">Address <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-name">Contact Name <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-contact">Contact Information <img className="sort-icon" src={sort} alt="Sort" /></h4>
                <h4 className="warehouse-list__row-heading row-actions">Actions</h4>
            </div>
            <ul className="warehouse-list__list">
                <WarehouseCard />
            </ul>
        </main>
    )
}

export default WarehouseList;