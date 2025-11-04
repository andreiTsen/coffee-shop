import { Component } from "react";
import OurFilter from "../ourFilter/ourFilter";
import OurStoreItems from "../ourStoreItems/ourStoreItems";
import "./ourStore.css";

class OurStore extends Component {
    render() {
        const {ourData, onUpdateSearch, onTabsSelect, onNavigate} = this.props;
        return (
            <section className="ourStore">
                <OurFilter onUpdateSearch={onUpdateSearch} onTabsSelect={onTabsSelect} />
                <OurStoreItems ourData={ourData} onNavigate = {onNavigate}/>
            </section>
        )
    }
}

export default OurStore;