import './promo2.css'
import promo2_img from './../../img/images/promo-img.jpg'

const Promo2 = () => {
    return ( 
        <section className='promo2'>
            <div className="container">
                <div className="promo2__content">
                    <div className="promo2__img">
                        <img src={promo2_img} alt="" />
                    </div>
                    <div className="promo2__text">
                        <div className="promo2__title">
                            <span className='promo2__highlight'><span>PAYDAY</span></span>
                            <span className='promo2__afthighlight'>SALE NOW</span>
                        </div>
                        <div className="promo2__desc">
                        Spend minimal $100 get 30% off
                        voucher code for your next purchase
                        </div>
                        <div className="promo2__date">
                            1 June - 10 June 2021
                        </div>
                        <div className="promo2__additional">
                            *Terms & Conditions apply
                        </div>
                        <div className="promo2__btn-wrapper">
                        <a href="#!" className="promo2__btn">
                        Shop now
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Promo2;