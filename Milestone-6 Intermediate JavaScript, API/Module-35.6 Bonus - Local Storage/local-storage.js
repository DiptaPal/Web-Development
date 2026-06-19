const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem("number", number);
};

const getNumberFromLS = () => {
    const number = localStorage.getItem("number");
    console.log("Get the value from local storage: ", number);
};

const setObjectToLS = () => {
    const customer = { name: "Kamal Pasa", products: 3, price: 100 };
    const customerJSON = JSON.stringify(customer);
    localStorage.setItem("customer", customerJSON);
};
const getObjectToLS = () => {
    const customerJSON = localStorage.getItem("customer");
    const customer = JSON.parse(customerJSON);
    console.log(customer);
};
