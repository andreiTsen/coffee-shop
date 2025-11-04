import { Component } from "react";
import "./ourDashboard.css";

class OurDashboard extends Component {
    render() {
        const {identyfityPagePleasure} = this.props;
        if (identyfityPagePleasure) {
            return (
                <div className='pleasure'>
                    <h1 className="ourDashboard__title" >For your pleasure</h1>
                </div>
            )
        }
        return (
            <div className='ourDashboard'>
                <h1 className="ourDashboard__title" >Our Coffee</h1>
            </div>
        )
    }
}

export default OurDashboard;