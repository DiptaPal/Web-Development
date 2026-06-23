import "./App.css";

export default function Singer({ singer }) {
    const { name, age } = singer;
    return (
        <div className="singer">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
        </div>
    );
}
