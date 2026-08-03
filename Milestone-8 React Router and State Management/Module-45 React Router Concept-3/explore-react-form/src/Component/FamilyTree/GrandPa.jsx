import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const GrandPa = ({ asset }) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt asset={asset}></Aunt>
            </section>
        </div>
    );
};

export default GrandPa;