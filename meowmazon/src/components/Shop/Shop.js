import Products from './Products';
import NavBar from '../Common/NavBar';
import Coupon from '../Common/Coupon';
import Footer from '../Common/Footer';

function Shop() {
const products = [
  {
    catName: 'Cat Hammock',
    catImg: './mouse.jpg',
    catInfo: 'meows',
    catPrice: 26
  },
  {
    catName: 'Scratching Pad',
    catImg: 'coming soon meow',
    catInfo: 'meows',
    catPrice: 30
  },
  {
    catName: 'WandToy',
    catImg: 'coming soon meow',
    catInfo: 'meows',
    catPrice: 40
  },
  {
    catName: 'Tofu Litter',
    catImg: 'coming soon meow',
    catInfo: 'meows',
    catPrice: 200
  }
];

  return (
    <div className="App">
        <Coupon />
        <NavBar />
        <Products products={products}/>
        <Footer />
    </div>
  );
}

export default Shop;
