import { Component } from "react";
import "./about.css";
import logo from "../../assets/icons/coffee-beans.svg";

class About extends Component {
    render() {
        return (
            <section className="about">
                <h3 className="about__title">About Us</h3>
                <div className="about__logo">
                    <hr className="about__line" />
                    <img className="about__svg" src={logo} alt="logo" />
                    <hr className="about__line" />
                </div>
                <div className="about__text">
                    <p className="about__text__item">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                    <p className="about__text__item">Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </section>
        )
    }
}

export default About;