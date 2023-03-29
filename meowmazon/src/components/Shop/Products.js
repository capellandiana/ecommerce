import CatItem from './CatItem'

function Products(props) {
const Pic1 = require('./ShoppImg/catbag.jpg');
const Pic2 = require('./ShoppImg/catboard.jpg')

    return (
        <div className='shoppingcontainer'>
            <CatItem
                name={props.products[0].catName}
                img={Pic1}
                info={props.products[0].catInfo}
                price={props.products[0].catPrice}
            />

            <CatItem
                name={props.products[1].catName}
                img={Pic2}
                info={props.products[1].catInfo}
                price={props.products[1].catPrice}
            />
            <CatItem
                name={props.products[2].catName}
                img={props.products[2].catImg}
                info={props.products[2].catInfo}
                price={props.products[2].catPrice}
            />
            <CatItem
                name={props.products[3].catName}
                img={props.products[3].catImg}
                info={props.products[3].catInfo}
                price={props.products[3].catPrice}
            />
        </div>
    )
};
export default Products;