import "./PriceTab.css";
function PriceTab({oldPrice , newPrice}){
    return (
        <div className="PriceTab">
            <span className="oldPrice">{oldPrice}  </span> 
            <span className="newPrice">{newPrice}</span>  
        </div>
    )
};
export default PriceTab;