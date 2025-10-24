import { Component } from "react";
import "./cards.css";

class Cards extends Component {

    render() {
        console.log(this.props);
        const {title, price, image} = this.props;
        return (
            <div className="store__item">
                <img className="store__img" src={image} alt="" />
                <h4 className="store_item__title">{title}</h4>
                <p className="store_item__price">{price}</p>
            </div>
        );
    }
}

export default Cards;