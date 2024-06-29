import './promo.css'
import promo_img from './../../img/images/header-img.jpg'

const Promo = () => {
    return (<section className="Promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className="highlight"><span>LET'S</span></span>
                    EXPLORE 
                    <span className="highlight highlight--yellow"><span>UNIQUE </span></span>
                    CLOTHES.
                    </div>
                    <div className="promo__desc">
                    Life for Influential and Innovative fashion!
                    </div>
                    <div className="promo__btn-wrapper">
                    <a href="#!" className="promo__btn">
                    Shop now
                    </a>
                    </div>
                </div>
                <div className="promo__img">
                    <img src={promo_img} alt="PromoImg" />
                </div>
            </div>
        </div>
    </section>  );
}
 
export default Promo;<section className="Promo">
<div className="container">
    <div className="promo__content"></div>
</div></section>