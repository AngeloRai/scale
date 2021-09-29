import React, { useEffect, useState } from "react";
import axios from "axios";

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

      console.log(sortedCountries);

      setCountires(sortedCountries);
      console.log(fetchedCountries.data);
      setLoading(false)
    };

    fetchCountries();
  }, []);

  console.log(countries);

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
              <div
                className="row"
                style={{ backgroundColor: i % 2 === 0 ? "#ccc6c6" : "white" }}
              >
                <div className="col-5">
                  {country.name} ({country.code})
                </div>

                <div className="col-12 col-md-6">
                  {country.fronteiras &&
                    country.fronteiras.map((borderCountry) => (
                      <span>{borderCountry}&nbsp;</span>
                    ))}
                  <div className="col-12">
                    Faz fronteira com{" "}
                    <strong>{country.fronteiras.length}</strong> países.
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Countries;
