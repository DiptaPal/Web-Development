async function loadData() {
    console.log("One");
    console.log("Two");

    /* fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => console.log("data got")); */

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Data got await", data[0]);

    console.log("Four");
    console.log("Five");
}

// loadData();

const loadData2 = async () => {
    console.log(1);
    console.log(2);
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log("Got Data", data[0]);
    } catch (error) {
        console.log("Error Happen: ", error);
    }
    console.log(4);
    console.log(5);
};

loadData2();
