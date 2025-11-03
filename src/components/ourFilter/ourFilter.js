import { Component } from "react";
import "./ourFilter.css";

class OurFilter extends Component {
    render() {
        return (
            <div className="ourFilter">
                <div className="search">
                    <label htmlFor="search" className="search__label">Lookiing for</label>
                    <input id="search" type="text" className="search__input" name="search" placeholder="start typing here..." />
                </div>
                <div className="tabs">
                    <span className="tabs__label">Or filter</span>
                    <button className="tabs__button">Brazil</button>
                    <button className="tabs__button">Kenya</button>
                    <button className="tabs__button">Columbia</button>
                </div>
            </div>
        )
    }
}

export default OurFilter;