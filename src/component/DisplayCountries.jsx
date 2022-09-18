import React from 'react'
import Fade from 'react-reveal/Fade'

const DisplayCountries = ({ name, flags, cap, population, region }) => {
  return (
    <Fade>
      <div className="country">
        <img src={flags.png} alt="flag" />
        <div className="country-info">
          <h3>{name.common}</h3>
          <p>Population: {population}</p>
          <p>Capital: {cap}</p>
          <p>Region: {region}</p>
        </div>
      </div>
    </Fade>
  )
}

export default DisplayCountries
