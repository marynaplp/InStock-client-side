import chevron from '../../../Assets/Icons/chevron_right-24px.svg';
import edit from '../../../Assets/Icons/edit-24px.svg';
import deleteBtn from '../../../Assets/Icons/delete_outline-24px.svg';
import './InventoryCard.scss';

export default function InventoryCard() {
      
    return (
        <section className='inventory-card__list'>
            <div className="inventory-card__list-container">
                <div className="inventory-card__container-info">
                    <h4 className="inventory-card__header">Inventory Item</h4>
                    <div className="inventory-card__inventory-item">
                        <p className="inventory-card__item">Television</p> <img  src={chevron} alt='chevron' />
                    </div>
                    <h4 className="inventory-card__header">CATEGORY</h4>
                    <p className="inventory-card__item">electronics</p>
                </div>
                <div className="inventory-card__container-info">
                    <h4 className="inventory-card__header">Status</h4>
                    <p className="inventory-card__item-status">In stock</p>
                    <h4 className="inventory-card__header">QTY</h4>
                    <p className="inventory-card__item">500</p>
                    <h4 className="inventory-card__header">WAREHOUSE</h4>
                    <p className="inventory-card__item">Manhattan</p>
                </div>
            </div>
            <div className="inventory-card__icons">
                <img className="inventory-card__edit" src={deleteBtn} alt="delete button" />
                <img className="inventory-card__edit" src={edit} alt="Edit Warehouse" />
            </div>
        </section>
    )
}