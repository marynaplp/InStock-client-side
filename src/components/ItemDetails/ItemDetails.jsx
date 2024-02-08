import './ItemDetails.scss';
import editIcon from '../../Assets/Icons/edit-24px.svg';
import arrowIcon from '../../Assets/Icons/arrow_back-24px.svg';

export default function ItemDetails() {
    return (
        <section className='item'>
            <div className='item__container'>
                <section className='item__header-container'>
                    <div className='item__header-title'>
                        <img src={arrowIcon} alt='arrow-icon' />
                        <h1>Television</h1>
                    </div>
                    <img src={editIcon} alt='edit-icon'/>
                </section>
                <section className='item__info-container'>
                    <div className='item__description-box'>
                        <h4 className='item__title item__title--active'>ITEM DESCRIPTION:</h4>
                        <p className='item__data item__data--active'>This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                        <h4 className='item__title'>CATEGORY:</h4>
                        <p className='item__data'>Electronics</p>
                    </div>
                    <div className='item__warehouse-info'>
                        <div className='item__inventory-container'>
                            <div className='item__inventory-status'>
                                <h4 className='item__title'>STATUS:</h4>
                                <p className='item__status'>IN STOCK</p>
                            </div>
                            <div className='item__inventory-status'>
                                <h4 className='item__title'>QUANTITY:</h4>
                                <p className='item__data'>500</p>
                            </div>
                        </div>
                        <h4 className='item__title'>WAREHOUSE:</h4>
                        <p className='item__data'>Manhattan</p>
                    </div>
                </section>
            </div>
        </section>
    )
}