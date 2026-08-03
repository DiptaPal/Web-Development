import Friend from "./Friend";
import Special from "./Special";

const Cousin = ({ name, asset }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Jamir" && <Special asset={asset}></Special>
            }
            {
                name === "Akib" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;