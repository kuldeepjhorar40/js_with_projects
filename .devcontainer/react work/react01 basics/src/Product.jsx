import  "./Product.css";
import PriceTab from  "./PriceTab.jsx";

function Product({name ,features , oldPrice , newPrice}){
    let list1 = features.map((el)=>  <li>{el}</li>);
    return (
        <div className="Product">
            <h3>{name}</h3>
            <p>{list1}</p>
            <PriceTab oldPrice = {oldPrice} newPrice = {newPrice}></PriceTab>
        </div>
    )
};
export default Product;