import { Component } from "react";
import "./ourFilter.css";

class OurFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        };
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        const buttonsData = [
            {name: 'Brasil', label: 'Brasil', className: 'tabs__button'},
            {name: 'Kenya', label: 'Kenya', className: 'tabs__button'},
            {name: 'Columbia', label: 'Columbia', className: 'tabs__button'},
        ];

        const buttons = buttonsData.map(({name, label, className}) => {
            return (
                <button key={name}
                    type="button"
                    className={className}
                    onClick={() => this.props.onTabsSelect(name)} >
                        {label}
                </button>
            )
        });

        return (
            <div className="ourFilter">
                <div className="search">
                    <label htmlFor="search" className="search__label">Lookiing for</label>
                    <input id="search"
                    type="text"
                    className="search__input"
                    name="search"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch} />
                </div>
                <div className="tabs">
                    <span className="tabs__label">Or filter</span>
                    {buttons}
                </div>
            </div>
        )
    }
}

export default OurFilter;