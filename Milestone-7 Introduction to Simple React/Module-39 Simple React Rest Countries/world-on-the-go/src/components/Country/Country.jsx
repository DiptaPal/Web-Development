import { useState } from 'react';
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

    const [visited, setVisited] = useState(false);

    const handleVisit = () => {
        // basic system:
        /* if (visited) {
            setVisited(false)
        } else {
            setVisited(true)
        } */

        // second system:
        // setVisited(visited ? false : true)

        // third system:
        setVisited(!visited);
        handleVisitedCountries(country, !visited);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img style={{ weight: "320px", height: "160px" }} src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h3>Name: {country?.name?.common}</h3>
            <p>Population: {country?.population?.population}</p>
            <p>Area: {country?.area?.area} {country?.area?.area > 30000 ? "Big Country" : "Small Country"}</p>
            <button style={{ marginRight: "20px" }} onClick={handleVisit}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => handleVisitedFlags(country?.flags?.flags?.png)}>Add Visited Flag</button>
        </div >
    );
};

export default Country;