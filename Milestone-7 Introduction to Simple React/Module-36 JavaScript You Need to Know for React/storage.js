const handleAddToStorage = () => {
    const name = document.getElementById("name").value;
    const id = document.getElementById("email").value;

    const data = { id, name };

    localStorage.setItem(id, JSON.stringify(data));

    const storedItem = localStorage.getItem(id);
    console.log(JSON.parse(storedItem));
};

const handleClear = () => {
    localStorage.clear();
};
