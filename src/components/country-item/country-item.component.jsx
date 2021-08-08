import React from "react";
import "./country-item.style.scss";

const CountryItem = ({ data }) => {
  return (
    <div className="item">
      <img className="item__flag" src={data.flag} alt="flag"></img>

      <div className="item__info">
        <h3>{data.name}</h3>
        <div>
          <span className="item__label">Population: </span>
          {data.population.toLocaleString()}
        </div>
        <div>
          <span className="item__label">Region: </span>
          {data.region}
        </div>
        <div>
          <span className="item__label">Capital: </span>
          {data.capital}
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
