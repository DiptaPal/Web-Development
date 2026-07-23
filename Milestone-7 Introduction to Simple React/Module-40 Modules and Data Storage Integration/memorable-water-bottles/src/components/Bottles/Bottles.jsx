import { use, useEffect, useState } from 'react';
import { addItemToCartLS, getCartFromLS, removeFromLS } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';
import Bottle from './../Bottle/Bottle';
import "./Bottles.css";
const Bottles = ({ bottlesPromise }) => {
    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    // useEffect:
    useEffect(() => {
        const storedCartIds = getCartFromLS();

        const storedCart = [];

        for (const id of storedCartIds) {
            const cartBottle = bottles.find(item => item.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle)
            }
        }
        setCart(storedCart);

    }, [bottles])

    const handleAddToCard = (bottle) => {
        const existingBottle = cart.find(item => item.id === bottle.id);
        if (existingBottle) {
            return;
        }
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the local storage
        addItemToCartLS(bottle.id)
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCard={handleAddToCard}
                    >
                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;