import React from 'react'

const DisplayCountries = ({ name, flags, cap, population, region }) => {
  return (
    <div className="country">
      <img src={flags.png} alt="flag" />
      <div className="country-info"> 
        <h3>{name.common}</h3>
        <p>Population: {population}</p>
        <p>Capital: {cap}</p>
        <p>Region: {region}</p>
      </div>
    </div>
  )
}

export default DisplayCountries
