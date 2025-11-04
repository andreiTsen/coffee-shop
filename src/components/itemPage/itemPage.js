import { Component } from "react";
import "./itemPage.css";
import itemPage from "../../assets/images/itemPage.jpg";
import logo from "../../assets/icons/coffee-beans.svg";

class ItemPage extends Component {
    render() {
        return (
            <section className="itemPage">
                <img src={itemPage} className="itemPage__img" alt="images coffee" />
                <div className="itemPage__container">
                    <div className="itemPage__headerContainer">
                        <h4 className="itemPage__header">About it</h4>
                        <div className="footer__logo">
                            <hr className="footer__line" />
                            <img src={logo} alt="" className="footer__svg" />
                            <hr className="footer__line" />
                        </div>
                    </div>
                    <p className="itemPage__country">Country: Brasil</p>
                    <p className="itemPage__text">
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="itemPage__price">Price: <span>16.99$</span></p>
                </div>
            </section>
        )
    }
}

export default ItemPage;