import logo from "../../Assets/Logo/InStock-Logo_2x.png";
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
               
                    <nav className="header__logo-container">
                    <Link to={`/`}>
                        <img src={logo} alt="instock-logo" className="header__logo"/>
                        </Link>
                    </nav>
                    
                    <nav className="header__nav-bar">
                        <div className="header__active-nav-item">
                            <h3 className="header__nav-link">Warehouses</h3>
                        </div>
                        <div className="header__inventory">
                            <h3 className="header__nav-link header__nav-link--inactive">Inventory</h3>
                        </div>
                    </nav>
                </div>
                <div className="header__extender"></div>
            </header>
        </>
    )
}