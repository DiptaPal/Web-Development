const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        // promise of response
        .then((response) => response.json())
        // promise of json data
        .then((data) => console.log(data))
        .catch((error) => console.error("Error: ", error));
};
