import { Component } from "react";
import OurCards from "../ourCards/ourCards";

class OurStoreItems extends Component {
    render() {
        const {ourData} = this.props;
        const cards = ourData.map(card => {
            const {id, ...cardProps} = card;
            return <OurCards key={id} {...cardProps} />
        })
        return (
            <div className="ourStore__items">
                {cards}
            </div>
        )
    }
}

export default OurStoreItems;