import { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlag] = useState([]);

    const handleVisitedCountries = (country, visited) => {
        const newVisitedCountries = [...visitedCountries, country];
        if (visited) {
            setVisitedCountries(newVisitedCountries);
        } else {
            const removeVisitedCountry = visitedCountries.filter(existingCountry => existingCountry?.cca3?.cca3 !== country?.cca3?.cca3)
            setVisitedCountries(removeVisitedCountry);
        }
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlag(newVisitedFlags);
    }

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                        key={country?.cca3?.cca3}>
                        {country.name.common}
                    </li>)
                }
            </ol>
            <div className="visited-flags-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country?.cca3?.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;