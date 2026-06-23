import "./App.css";
import Movie from "./Movie";
import Singer from "./Singer";
import ToDo from "./Tode";

function App() {
    const time = 40;
    const movies = ["Sokal Sondha", "Tufan", "Surongo", "Rakhhos", "Jomoj"];
    const singers = [
        {
            id: 1,
            name: "Kamal",
            age: 24,
        },
        {
            id: 2,
            name: "Tahsan",
            age: 34,
        },
        {
            id: 3,
            name: "Hridoy",
            age: 27,
        },
    ];
    return (
        <>
            <h1>React Core Concept</h1>
            <Student name="Dipta Pal" dept="Computer Science"></Student>
            <Student name="Razib" dept="MBA"></Student>
            <Person></Person>
            <Friend name="Jodu" age={34}></Friend>
            <Tour location="London"></Tour>
            <Developer name="Pasha" tech="Python"></Developer>
            <Developer name="Kamal" tech="JS"></Developer>

            <h2>Todo Component</h2>
            <ToDo task="Learn React" isDone={true} time={time}></ToDo>
            <ToDo task="Revise JS" isDone={false}></ToDo>
            <ToDo task="Take a shower" isDone={true} time={100}></ToDo>

            <h2>Movie Component</h2>
            {movies.map((movie, index) => (
                <Movie movie={movie} key={index}></Movie>
            ))}

            <h2>Singer Component</h2>
            {singers.map((singer) => (
                <Singer singer={singer} key={singer.id}></Singer>
            ))}
        </>
    );
}

function Student(props) {
    const { name, dept } = props;
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Dept: {dept}</p>
        </div>
    );
}

function Person() {
    const age = 19;
    const name = "Jolil";
    const personStyle = {
        color: "red",
        textAlign: "right",
    };
    return (
        <p id="" title="tooltip" style={personStyle}>
            I am a person: {name} {age}
        </p>
    );
}

function Friend({ name, age }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

function Tour({ location, price = 0 }) {
    return (
        <div>
            <h3>Location: {location}</h3>
            <p>Price: {price}</p>
        </div>
    );
}

function Developer(props) {
    // console.log(props);
    return (
        <div
            style={{
                border: "2px solid green",
                borderRadius: "20px",
            }}
        >
            <h3>Developer: {props.name}</h3>
            <p>Technology: {props.tech}</p>
        </div>
    );
}

export default App;
