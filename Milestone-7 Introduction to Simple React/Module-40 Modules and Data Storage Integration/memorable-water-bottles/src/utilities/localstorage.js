/* 
    1.to get something from local storage, you will get it as a string.
    2. convert this to javascript object/array
*/

const getCartFromLS = () => {
    const storedCartString = localStorage.getItem("cart");

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLS = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const addItemToCartLS = (id) => {
    const cart = getCartFromLS();

    // cart.push(id);
    const newCart = [...cart, id];

    // save new cart to the local storage
    saveCartToLS(newCart);
}

const removeFromLS = id => {
    const storedCart = getCartFromLS();
    const remainingCart = storedCart.filter(storedId => storedId !== id);
    saveCartToLS(remainingCart)
}

export { addItemToCartLS, getCartFromLS, removeFromLS };

