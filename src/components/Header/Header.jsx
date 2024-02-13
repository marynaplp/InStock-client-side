import logo from "../../Assets/Logo/InStock-Logo_2x.png";
import './Header.scss';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <nav className="header__logo-container">
                        <Link to={`/Warehouses`}><img src={logo} alt="instock-logo" className="header__logo"/></Link>
                    </nav>
                    <nav className="header__nav-bar">
                        <Link className="header__active-nav-item" to={`/Warehouses`}>
                                <h3 className="header__nav-link">Warehouses</h3>
                        </Link>
                        <Link className="header__inventory" to={`/Inventory`}>
                                <h3 className="header__nav-link header__nav-link--inactive">Inventory</h3>
                        </Link>
                    </nav>
                </div>
                <div className="header__extender"></div>
            </header>
        </>
    )
}