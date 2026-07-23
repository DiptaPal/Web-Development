import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className="cart-container">
            {
                cart.map(bottle =>
                    <div key={bottle.id} className="mini-cart">
                        <img src={bottle.img} alt="" />
                        <button onClick={() => handleRemoveFromCart(bottle.id)} className="cross">X</button>
                    </div>)
            }
        </div>
    );
};

export default Cart;