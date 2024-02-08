import './ItemDetails.scss';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';

export default function ItemDetails() {
    return (
        <section className='item-details'>
            <div className='item-details__container'>
                <section className='item-details__header-container'>
                    <div className='item-details__header-title'>
                        <img src={arrowIcon} alt='arrow-icon' />
                        <h1>Television</h1>
                    </div>
                    <img src={editIcon} alt='edit-icon'/>
                </section>
                <section className='item-details__info-container'>
                    <div className='item-details__description-box'>
                        <h4 className='item-details__title'>ITEM DESCRIPTION:</h4>
                        <p className='item-details__data'>This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                        <h4 className='item-details__title'>CATEGORY:</h4>
                        <p className='item-details__data'>Electronics</p>
                    </div>
                    <div className='item-details__warehouse-info'>
                        <div className='item-details__inventory-container'>
                            <div>
                                <h4 className='item-details__title'>STATUS:</h4>
                                <p className='item-details__data-status'>IN STOCK</p>
                            </div>
                            <div>
                                <h4 className='item-details__title'>QUANTITY:</h4>
                                <p className='item-details__data'>500</p>
                            </div>
                        </div>
                        <h4 className='item-details__title'>WAREHOUSE:</h4>
                        <p className='item-details__data'>Manhattan</p>
                    </div>
                </section>
            </div>
        </section>
    )
}