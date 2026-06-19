const handleAddProduct = () => {
    const productEl = document.getElementById("product");
    const quantityEl = document.getElementById("quantity");

    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);

    // displayProduct(product, quantity);
    addProductToCart(product, quantity);

    productEl.value = "";
    quantityEl.value = "";
};

const getCart = () => {
    let cart = {};

    const cartJSON = localStorage.getItem("cart");

    if (cartJSON) {
        cart = JSON.parse(cartJSON);
    }

    return cart;
};

const addProductToCart = (product, quantity) => {
    const cart = getCart();

    if (cart[product]) {
        cart[product] = cart[product] + quantity;
    } else {
        cart[product] = quantity;
    }
    console.log("cart: ", cart);
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem("cart", cartJSON);
};

const displayProduct = (product, quantity) => {
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;

    // get the ul
    const ul = document.getElementById("products-container");
    ul.appendChild(li);
};

// display products from local storage
const displayStoredProducts = () => {
    const cart = getCart();

    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
};

displayStoredProducts();
