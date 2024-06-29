import Card from './../card/Card'
import './arrivals.css'
import Cat01Img from './../../img/categories/cat-01.jpg'
import Cat02Img from './../../img/categories/cat-02.jpg'
import Cat03Img from './../../img/categories/cat-03.jpg'

const Arrivals = () => {
    return (  
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__header">
                    <h2 className='title-2'>NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__cards">
                    <Card title="Hoodies & Sweetshirts" img={Cat01Img}/>
                    <Card title="Coats & Parkas" img={Cat02Img}/>
                    <Card title="Tees & T-Shirts" img={Cat03Img}/>
                </div>
            </div>
        </section>
    );
}
 
export default Arrivals;