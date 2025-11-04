import { Component } from "react";
import "./dashboard.css";
import logo from "../../assets/icons/coffee-beans.svg";

class Dashboard extends Component {
    render() {
        return (
            <section className="dashboard">
                <div className="dashboard__info">
                    <h1 className="dashboard__title">Everything You Love About Coffee</h1>
                    <div className="dashboard__logo">
                        <hr className="dashboard__line" />
                        <img className="dashboard__svg" src={logo} alt="logo" />
                        <hr className="dashboard__line" />
                    </div>
                    <p className="dashboard__text">We makes every day full of energy and taste </p>
                    <p className="dashboard__text">Want to try our beans?</p>
                    <button className="dashboard__button">More</button>
                </div>
            </section>
        )
    }
};

export default Dashboard;