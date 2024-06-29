import './footer.css'
import fb from './../../img/socials/fb.svg'
import inst from './../../img/socials/inst.svg'
import twit from './../../img/socials/tw.svg'
import in_icon from './../../img/socials/in.svg'

const Footer = () => {
    return ( 
        <section className="footer__section">
            <div className="container">
                <div className="footer">
                <div className="footer__leftside">
                    <div className="footer__title">
                        Fashion
                    </div>
                    <div className="footer__text">
                    Complete your style with awesome clothes from us.
                    </div>
                    <div className="footer__icons">
                        <img src={fb} alt="facebook" />
                        <img src={inst} alt="instagram" />
                        <img src={twit} alt="twitter" />
                        <img src={in_icon} alt="linkedin" />
                    </div>
                </div>
                <div className="footer__alllinks">
                    <div className="left__link">
                        <ul>
                            <li><a href="#!">Company</a></li>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact us</a></li>
                            <li><a href="#!">Support</a></li>
                            <li><a href="#!">Careers</a></li>
                        </ul>
                    </div>
                    <div className="middle__link">
                        <ul>
                            <li><a href="#!">Quick link</a></li>
                            <li><a href="#!">Share location</a></li>
                            <li><a href="#!">Orders tracking</a></li>
                            <li><a href="#!">Size Guide</a></li>
                            <li><a href="#!">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="right__link">
                        <ul>
                            <li><a href="#!">Legal</a></li>
                            <li><a href="#!">Terms & conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}
 
export default Footer;