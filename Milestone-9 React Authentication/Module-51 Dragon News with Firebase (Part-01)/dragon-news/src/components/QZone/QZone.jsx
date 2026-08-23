import image4 from "../../assets/bg.png";
import image2 from "../../assets/class.png";
import image3 from "../../assets/playground.png";
import image1 from "../../assets/swimming.png";

const QZone = () => {
    return (
        <div className="mt-5">
            <div className="bg-base-200 px-1 py-4">
                <h3 className="text-xl font-semibold text-primary p-3">Q-Zone</h3>
                <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="mt-5">
                <img src={image4} alt="" className="w-full" />
            </div>
        </div>
    );
};

export default QZone;