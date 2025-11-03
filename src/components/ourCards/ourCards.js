import { Component } from "react";
import "./ourCards.css";

class OurCards extends Component {

    render() {
        const {data} = this.props;
        const {countries} = this.props;
        const {index} = this.props;
        const country = countries.map(country => {
            const {id, name} = country;
            if (index === id) {
                return (
                    <p className="ourstore__country" key={id}>{name}</p>
                )
            } else {
                return null;
            }
        })
        return (
            <div className="ourStore__item">
                <img className="ourStore__img" src={data[2].image} alt="" />
                <div className="ourStore__container">
                    <h4 className="ourStore_item__title">{data[2].title}</h4>
                    {country}
                    <p className="ourStore_item__price">{data[2].price}</p>
                </div>
            </div>
        );
    }
}

export default OurCards;