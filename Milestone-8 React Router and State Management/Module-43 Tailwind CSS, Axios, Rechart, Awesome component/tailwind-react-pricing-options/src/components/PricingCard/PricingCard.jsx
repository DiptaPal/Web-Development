import { PricingFeature } from "./PricingFeature"

export const PricingCard = ({ pricing }) => {
    const { name, price, description, currency, billingPeriod, features, popular } = pricing
    return (
        <div className="border bg-white rounded-xl p-4 shadow space-y-4 flex flex-col relative">
            {/* card header */}
            <div>
                <h1 className="text-3xl">{name}</h1>
                <h4 className="text-xl">
                    $<span>{price}</span>
                    <span> {currency}</span>
                    <span className="text-gray-600"> /{billingPeriod}</span></h4>
            </div>

            {/* card body */}
            <div className="bg-gray-200/70 p-4 rounded-lg shadow-xl flex-1">
                <p>{description}</p>
                <ul>
                    {
                        features.map((feature, index) =>
                            <PricingFeature
                                key={index}
                                feature={feature}
                            ></PricingFeature>
                        )
                    }
                </ul>
            </div>
            <button className="btn bg-gray-200/70 w-full">Subscribe</button>
            <div className="absolute -right-4 -top-4">
                {
                    popular && <p className="font-bold bg-sky-300 text-white text-center py-1 px-2 rounded">Popular</p>
                }
            </div>
        </div>
    )
}
