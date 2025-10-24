import { Component } from "react";
import coffeeBeans from '../../assets/images/coffeeBeans.jpg';
import coffeePresto from '../../assets/images/coffeePresto.jpg';
import coffeeAromistico from '../../assets/images/coffeeAromistico.jpg';
import "./store.css";

class Store extends Component {
    render() {
        return (
            <section className="store">
                <h3 className="store__title">Our best</h3>
                <div className="store__items">
                    <div className="store__item">
                        <img className="store__img" src={coffeeBeans} alt="" />
                        <h4 className="store_item__title">Solimo Coffee Beans 2 kg</h4>
                        <p className="store_item__price">$12.49</p>
                    </div>
                    <div className="store__item">
                        <img className="store__img" src={coffeePresto} alt="" />
                        <h4 className="store_item__title">Presto Coffee Beans 1 kg</h4>
                        <p className="store_item__price">15.99$</p>
                    </div>
                    <div className="store__item">
                        <img className="store__img aromistico" src={coffeeAromistico} alt="" />
                        <h4 className="store_item__title">AROMISTICO Coffee 1 kg</h4>
                        <p className="store_item__price">6.99$</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Store;