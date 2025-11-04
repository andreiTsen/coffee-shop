import { Component } from "react";
import ourAbout from "../../assets/images/ourAbout.jpg";
import logo from "../../assets/icons/coffee-beans.svg";
import pleasureImage from "../../assets/images/pleasureAbout.jpg";
import "./ourAbout.css";

class OurAbout extends Component {
    render() {
        const {identyfityPagePleasure} = this.props;
        if (identyfityPagePleasure) {
            return (
                <section className="ourAbout">
                    <div className="ourAbout__container">
                        <img className="ourAbout__img" src={pleasureImage} alt="" />
                        <header className="ourAbout__main">
                                <h3 className="ourAbout__title">About our goods</h3>
                                <div className="footer__logo">
                                    <hr className="footer__line" />
                                    <img src={logo} alt="" className="footer__svg" />
                                    <hr className="footer__line" />
                                </div>
                                <p className="ourAbout__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                <p className="ourAbout__text">
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. 
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </p>
                        </header>
                    </div>
                    <hr className="ourAbout__summaryLine" />
                </section>
            )
        }

        return (
            <section className="ourAbout">
                <div className="ourAbout__container">
                    <img className="ourAbout__img" src={ourAbout} alt="" />
                    <header className="ourAbout__main">
                            <h3 className="ourAbout__title">About our beans</h3>
                            <div className="footer__logo">
                                <hr className="footer__line" />
                                <img src={logo} alt="" className="footer__svg" />
                                <hr className="footer__line" />
                            </div>
                            <p className="ourAbout__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p className="ourAbout__text">
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. 
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                    </header>
                </div>
                <hr className="ourAbout__summaryLine" />
            </section>
        )
    }
}

export default OurAbout;