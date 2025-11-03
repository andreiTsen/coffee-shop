import { Component } from "react";
import OurCards from "../ourCards/ourCards";

class OurStoreItems extends Component {
    render() {
        const {data} = this.props;
        const {countries} = this.props;
        return (
            <div className="ourStore__items">
                <OurCards data={data} countries={countries} index={1}/>
                <OurCards data={data} countries={countries} index={2}/>
                <OurCards data={data} countries={countries} index={3}/>
                <OurCards data={data} countries={countries} index={1}/>
                <OurCards data={data} countries={countries} index={1}/>
                <OurCards data={data} countries={countries} index={1}/>
            </div>
        )
    }
}

export default OurStoreItems;