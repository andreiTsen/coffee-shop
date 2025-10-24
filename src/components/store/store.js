import { Component } from "react";
import "./store.css";
import Cards from "../cards/cards";

class Store extends Component {

    render() {
        const {data} = this.props;
        const card = data.map(card => {
            const {id, ...cardProps} = card;
            return (
                <Cards key={id} {...cardProps} />
            );
        })

        return (
            <section className="store">
                <h3 className="store__title">Our best</h3>
                <div className="store__items">
                    {card}
                </div>
            </section>
        )
    }
}

export default Store;