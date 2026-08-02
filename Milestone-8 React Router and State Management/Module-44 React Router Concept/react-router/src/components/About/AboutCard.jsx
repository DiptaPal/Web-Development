
const AboutCard = () => {
    return (
        <div className="card w-full md:card-lg bg-base-200 md:max-w-96 shadow">
            <figure className="hover-gallery">
                <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
                <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
                <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
                <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    daisyUI Hat
                    <span className="font-normal">$25</span>
                </h2>
                <p>High Quality classic cap hat with stitch logo</p>
            </div>
        </div>
    );
};

export default AboutCard;