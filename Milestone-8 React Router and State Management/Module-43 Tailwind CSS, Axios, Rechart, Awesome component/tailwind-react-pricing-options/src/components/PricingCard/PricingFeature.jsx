import { SquareCheckBig } from 'lucide-react';

export const PricingFeature = ({ feature }) => {
    return (
        <li className="flex items-start gap-2 mt-3">
            <SquareCheckBig /> {feature}
        </li>
    )
}
