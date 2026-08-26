import { useLoaderData } from 'react-router';

const Phone = () => {
    const phone = useLoaderData();
    return (
        <div>
            <h2>{phone.name}</h2>
            <img src={phone.image} alt={phone.name} />
        </div>
    );
};

export default Phone;