import WarehouseCard from './WarehouseCard/WarehouseCard';
import './WarehouseList.scss';

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
            <ul className="warehouse-list__list">
                <WarehouseCard />
            </ul>
        </main>
    )
}

export default WarehouseList;