import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Friends from "./Friends";
import Players from "./Players";
import Posts from "./Posts";
import Users from "./Users";


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())


const fetchFriends = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    return res.json();
}

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    return res.json();
}
function App() {
    const friendsPromise = fetchFriends();
    const postsPromise = fetchPosts();

    function handleClick1() {
        alert("I am clicked 1");
    }
    const handleClick3 = () => {
        alert("I am clicked 3");
    };

    const handleClick5 = (num) => {
        alert(`I am clicked ${num}`);
    };

    // useState hock in details
    /* function useState(initialValue) {
        let state = initialValue;
        function setState(newValue) {
            state = newValue;
        }
        return [state, setState];
    } */

    return (
        <>
            <h3>React + Vite</h3>
            <div className="btn">
                <button onClick={handleClick1}>Click Me</button>
                <button
                    onClick={function handleClick2() {
                        alert("I am clicked 2");
                    }}
                >
                    Click Me
                </button>
                <button onClick={handleClick3}>Click Me</button>
                <button
                    onClick={() => {
                        alert("I am clicked 4");
                    }}
                >
                    Click Me
                </button>
                <button onClick={() => handleClick5(5)}>Click Me</button>
                <Counter></Counter>
            </div>
            <Batsman></Batsman>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Users fetchUsers={fetchUsers}></Users>
            </Suspense>


            <Suspense fallback={<h3>Loading...</h3>}>
                <Friends friendsPromise={friendsPromise}></Friends>
            </Suspense>
            <Suspense fallback={<h3>Posts are coming...</h3>}>
                <Posts postsPromise={postsPromise}></Posts>
            </Suspense>
            <Players></Players>
        </>
    );
}

export default App;
