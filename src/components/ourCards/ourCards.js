import { Component } from "react";
import "./ourCards.css";

class OurCards extends Component {

    render() {
        const {price, title, image, country} = this.props;
        return (
            <div className="ourStore__item">
                <img className="ourStore__img" src={image} alt="" />
                <div className="ourStore__container">
                    <h4 className="ourStore_item__title">{title}</h4>
                    <p className="ourStore_item__country">{country}</p>
                    <p className="ourStore_item__price">{price}</p>
                </div>
            </div>
        );
    }
}

export default OurCards;