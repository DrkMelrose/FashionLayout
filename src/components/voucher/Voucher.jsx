import './voucher.css'
import voucherImg from './../../img/images/vouchers-img.png'
import googleplayImg from './../../img/icons/google-play.png'
import appstoreImg from './../../img/icons/app-store.png'

const Voucher = () => {
    return (
        <section className='voucher'>
            <div className="container">
                <div className="voucher__content">
                    <div className="voucher__text">
                        <div className="voucher__title">
                        DOWNLOAD APP &
                        GET THE VOUCHER!
                        </div>
                        <div className="voucher__desc">
                        Get 30% off for first transaction using
                        Rondovision mobile app for now.
                        </div>
                        <div className="voucher__buttons">
                            <div className="voucher__btn1__img">
                                <img src={googleplayImg} alt="" />
                            </div>
                            <div className="voucher__btn2__img">
                                <img src={appstoreImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="voucher__img">
                        <img src={voucherImg} alt="Img" />
                    </div>
                </div>
            </div>
        </section>
      );
}
 
export default Voucher;