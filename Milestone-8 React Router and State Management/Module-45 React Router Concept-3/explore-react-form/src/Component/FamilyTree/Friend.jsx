import { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {

    const [money, setMoney] = use(MoneyContext);

    return (
        <div>
            <h3>Friend</h3>
            <p>Family Got: {money}</p>
        </div>
    );
};

export default Friend;