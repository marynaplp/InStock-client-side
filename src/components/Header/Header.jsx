import logo from "../../Assets/Logo/InStock-Logo_2x.png";
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <nav>
                <img src={logo} alt="instock-logo" className="header__logo"/>
            </nav>
            <nav className="header__nav-bar">
                <div className="header__active-nav-item">
                    <span className="header__nav-link">Warehouse</span>
                </div>
                <span className="header__nav-link header__nav-link--inactive">Inventory</span>
            </nav>
        </header>
    )

}