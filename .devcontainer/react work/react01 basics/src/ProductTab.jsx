import Product from "./Product.jsx";
import  "./ProductTab.css";

function ProductTab(){
    return (
        <div className="ProductTab">
            <Product name = "Logistech MX Master 3S" features={["8000 DPI" , "5 programming Buttons"]} oldPrice = {12545}  newPrice={8999} 
            />
            <Product name = "Apple Pencil(2nd Gen)" features={["Intuitive touch surface" , "Designed for iPad Pro"]} oldPrice = {12545}  newPrice={8999}  />
            <Product name = "Logistech MX Master 3S" features={["8000 DPI" , "5 programming Buttons"]} oldPrice = {12545}  newPrice={8999}  />
            <Product name = "Logistech MX Master 3S" features={["8000 DPI" , "5 programming Buttons"]} oldPrice = {12545}  newPrice={8999}  />
        </div>
    )
};


export default ProductTab;