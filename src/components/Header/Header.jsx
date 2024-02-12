import logo from "../../Assets/Logo/InStock-Logo_2x.png";
import './Header.scss';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [activeLink, setActiveLink] = useState('');

    const updateActiveLink = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <nav className="header__logo-container">
                        <Link to={`/Warehouses`} onClick={() => updateActiveLink('Warehouses')}><img src={logo} alt="InStock logo" className="header__logo"/></Link>
                    </nav>
                    <nav className="header__nav-bar">
                        <div className={`header__state ${activeLink === 'Warehouses' ? 'header__active-nav-item' : 'header__nav-link--inactive'}`}>
                            <Link to={`/Warehouses`} onClick={() => updateActiveLink('Warehouses')}> 
                                <h3 className="header__nav-link">Warehouses</h3>
                            </Link>
                        </div>
                        <div className={`header__state ${activeLink === 'Inventory' ? 'header__active-nav-item' : 'header__nav-link--inactive'}`}>
                            <Link to={`/Inventory`} onClick={() => updateActiveLink('Inventory')}> 
                                <h3 className="header__nav-link">Inventory</h3>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="header__extender"></div>
            </header>
        </>
    );
}
