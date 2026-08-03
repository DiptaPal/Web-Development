import Special from "./Special";

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;