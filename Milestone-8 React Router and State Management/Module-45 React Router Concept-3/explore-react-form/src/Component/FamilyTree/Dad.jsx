import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;