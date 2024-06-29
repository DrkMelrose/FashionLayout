import './favourite.css'
import Card from './../card/Card'
import card1Img from './../../img/images/promo-01.jpg'
import card2Img from './../../img/images/promo-02.jpg'

const Favourite = () => {
    return ( 
        <section className='favourite'>
            <div className="container">
                <div className="favourite__header">
                    <h2 className='title-2'>Young's Favourite</h2>
                </div>
                <div className="favourite__cards">
                    <Card title="Trending on Instagram" img={card1Img}/>
                    <Card title="All under $40" img={card2Img}/>
                </div>
            </div>
        </section>
     );
}
 
export default Favourite;