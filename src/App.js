import Brands from './components/brands/Brands';
import Header from './components/header/Header'
import Promo from './components/promo/Promo';
import Arrivals from './components/arrivals/Arrivals'
import Promo2 from './components/promo2/Promo2';
import Favourite from './components/favourite/Favourite';
import Voucher from './components/voucher/Voucher';
import Mail from './components/mail/Mail'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Promo2 />
      <Favourite />
      <Voucher />
      <Mail />
      <Footer />
    </div>
  );
}

export default App;
