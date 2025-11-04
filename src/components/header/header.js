import { Component } from "react";
import "./header.css";

import Logo from "../../assets/icons/logotype.svg";

class Header extends Component {
    render() {
        const { onNavigate } = this.props;
        return (
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__link logo" key={1}>
                            <a href="/ourCoffee">
                                <img src={Logo} alt="logo" />
                            </a>
                        </li>
                        <li className="header__item" key={2}>
                            <a className="header__link" href="/about" onClick={(e) => { e.preventDefault(); onNavigate('main'); }}>Coffee house</a>
                        </li>
                        <li className="header__item" key={3} >
                            <a className="header__link" href="/ourCoffee" onClick={(e) => { e.preventDefault(); onNavigate('ourCoffee'); }}>Our coffee</a>
                        </li>
                        <li className="header__item" key={4}>
                            <a className="header__link" href="/for-your-pleasure" onClick={(e) => { e.preventDefault(); onNavigate('pleasure'); }} >For your pleasure</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;