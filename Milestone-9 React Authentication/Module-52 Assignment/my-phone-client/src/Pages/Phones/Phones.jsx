import { Link, useLoaderData } from 'react-router';

const Phones = () => {
    const phones = useLoaderData();

    return (
        <div className="text-center">
            <h3 className="mb-10">All Phones are here: {phones.length}</h3>
            {
                phones.map(phone => <li className="list-none mt-4 bg-gray-400 rounded shadow px-4 py-1" key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;