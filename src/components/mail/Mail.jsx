import './mail.css';

const Mail = () => {
  return (
    <section className='mail__section'>
      <div className="container">
        <div className="mail__text">
            <div className="mail__title">
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </div>
            <div className="mail__desc">
                Type your email down below and be young wild generation
            </div>
            <div className='white__board'>
                <div className="mail__btn__field">
                <label className='mail__field'>
                    <input 
                    type="email" 
                    name="mail"  
                    placeholder="Add your email here" 
                    />
                </label>
                <input className="mail__btn" type="submit" value="SEND" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Mail;
