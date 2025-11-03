import { Component } from "react";
import OurFilter from "../ourFilter/ourFilter";
import OurStoreItems from "../ourStoreItems/ourStoreItems";
import "./ourStore.css";

class OurStore extends Component {
    render() {
        const {data} = this.props;
        const {countries} = this.props;
        return (
            <section className="ourStore">
                <OurFilter />
                <OurStoreItems data={data} countries={countries} />
            </section>
        )
    }
}

export default OurStore;