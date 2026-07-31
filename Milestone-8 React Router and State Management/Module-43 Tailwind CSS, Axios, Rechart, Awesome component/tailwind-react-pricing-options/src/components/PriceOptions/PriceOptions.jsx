import { use } from 'react';
import { PricingCard } from '../PricingCard/PricingCard';

export const PriceOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    return (
        <div className="my-6 max-w-300 mx-auto">
            <div className="mx-4">
                <h2 className="text-5xl text-center mb-12">Get Our Membership</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        pricingData.map(pricing =>
                            <PricingCard
                                key={pricing.id}
                                pricing={pricing}>
                            </PricingCard>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
