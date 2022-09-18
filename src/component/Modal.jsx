import React from 'react'

const Modal = ({
  name,
  flags,
  cap,
  population,
  closeModal,
  subregion,
  nativeName,
  region,
}) => {
  return (
    <div className="pop-up-container" onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="pop-up-header">
          <button onClick={closeModal}>x</button>
        </div>

        <div className="pop-up-content">
          <img src={flags.png} />
          <div>
            <h2>{name.common}</h2>
            <p>Native name: {nativeName}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Capital: {cap}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
