import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

function Countries() {
  const [countries, setCountires] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const fetchedCountries = await axios(
        "https://www.amock.io/api/fcmaia/countries"
      );

      const sortedCountries = fetchedCountries.data.sort(
        (a, b) => b.fronteiras.length - a.fronteiras.length
      );

      setCountires(sortedCountries);

      setLoading(false);
    };

    fetchCountries();
  }, []);

  return (
    <div className="container border shadow my-5">
      <div className="row bg-dark text-white py-2 my-1">
        <div className="col-12 col-md-5">Pais</div>
        <div className="col-12 col-md-5">Fronteiras</div>
      </div>
      {loading ? (
        <p>Loading... </p>
      ) : (
        <div>
          {countries &&
            countries.map((country, i) => (
              <CountryCard 
                country={country}
                i={i}
                key={i}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Countries;
