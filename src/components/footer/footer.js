import { Component } from "react";
import "./footer.css";
import logotype from "../../assets/icons/coffee-beans.svg";
import Logo from "../../assets/icons/footerIcon.svg";

class Footer extends Component {
    render() {
        const { onNavigate } = this.props;
        return (
            <footer className="footer">
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item logo" key={1}>
                            <img src={Logo} alt="" />
                        </li>
                        <li className="footer__item" key={2}>
                            <a className="footer__link" href="/about" onClick={(e) => { e.preventDefault(); onNavigate('main'); }}>Coffee house</a>
                        </li>
                        <li className="footer__item" key={3}>
                            <a className="footer__link" href="/our-coffee"onClick={(e) => { e.preventDefault(); onNavigate('ourCoffee'); }}>Our coffee</a>
                        </li>
                        <li className="footer__item" key={4}>
                            <a className="footer__link" href="/for-your-pleasure" onClick={(e) => { e.preventDefault(); onNavigate('pleasure');}}>For your pleasure</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__logo">
                    <hr className="footer__line" />
                    <img className="footer__svg" src={logotype} alt="logo" />
                    <hr className="footer__line" />
                </div>
            </footer>
        )
    }
}

export default Footer;