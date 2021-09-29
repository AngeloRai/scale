import React from "react";

function CountryCard({ country, i }) {
  return (
    <div
      className="row"
      style={{ backgroundColor: i % 2 === 0 ? "#ccc6c6" : "white" }}
      
    >
      <div className="col-5">
        {country.name} ({country.code})
      </div>

      <div className="col-12 col-md-6">
        {country.fronteiras &&
          country.fronteiras.map((borderCountry, index) => (
            <span key={index}>{borderCountry}&nbsp;</span>
          ))}
        <div className="col-12">
          Faz fronteira com <strong>{country.fronteiras.length}</strong> países.
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
