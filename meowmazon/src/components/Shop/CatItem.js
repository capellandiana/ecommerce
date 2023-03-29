import './CatItem.css';
import Card from '../UI/Card';

function CatItem(props) {

// const myModule = require('./ShoppImg/catbag.jpg');
return (
<Card>
    <div className='item'>
        <h1>{props.name}</h1>
        {/* <img src={require("./ShoppImg/catbag.jpg")} alt={"this was good but hard coded."}/> */}
        {/* find out how to add another component from images file? */}
        {/* <p>{props.img} </p> */}
        <img src={props.img} alt='this is close?' />
        <p>{props.info}</p>
        <p>${props.price}</p>
        <button>Add to cart</button>
    </div>
    </Card>)
}

export default CatItem;

//this is recieving props from products
// this is close? <img src={props.img} /> but the image is still not displaying. 