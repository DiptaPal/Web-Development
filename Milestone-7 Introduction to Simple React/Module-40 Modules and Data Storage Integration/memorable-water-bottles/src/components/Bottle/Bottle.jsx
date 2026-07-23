import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCard }) => {
    const { img, name, price, stock } = bottle;
    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt=""></img>
            </div>
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} remaining</p>
            <button onClick={() => { handleAddToCard(bottle) }} disabled={stock <= 0} className="buy-now-btn">Buy Now</button>
        </div>
    );
};

export default Bottle;