import { useEffect, useState, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import DisplayCountries from './DisplayCountries.jsx'
import Modal from './Modal.jsx'
import { SpinningCircles } from 'react-loading-icons'

const Countries = () => {
  const [data, setData] = useState([])

  // input value from search
  const [searchCountry, setSearchCountry] = useState('')

  // ---------
  const [modalToggle, setModalToggle] = useState(false)
  const [modalContent, setModalContent] = useState()
  var hello;

  const [stopScroll, setStopScroll] = useState(null)
  
  const showCountry = (country) => {
    setModalContent(country)
    setModalToggle(!modalToggle)
    // to prevent scrolling of the page when the moal is open
    if (stopScroll === null) {
      setStopScroll({ position: 'fixed' })
    } else {
      setStopScroll(null)
    }
  }
  // ------------


  // fetch data
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res?.data))
      .catch((err) => alert(`${err.message} Please try again`))
  }, [hello])

  // filter country
  const result = useMemo(() => {
    if (!searchCountry) {
      return data
    }
    // returns countries or region that includes search value
    return data.filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(searchCountry.toLowerCase()) ||
        country.region.toLowerCase().includes(searchCountry.toLowerCase()),
    )
  }, [searchCountry, data])

  return (
    <>
      <div id="input">
        <input
          type="search"
          placeholder="Enter country or region"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
      </div>
      {/* --------- Show loader when data is no fully fetched -------- */}
      {result.length < 200 ? (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          <SpinningCircles />
        </div>
      ) : (
        result.map((country) => (
          <div
            className="countries"
            key={uuidv4()}
            style={stopScroll}
            onClick={() => showCountry(country)}
          >
            <DisplayCountries
              name={country.name}
              cap={country.capital}
              population={country.population}
              region={country.region}
              flags={country.flags}
            />
          </div>
        ))
      )}

      {modalToggle && (
        <Modal
          name={modalContent.name}
          cap={modalContent.capital}
          population={modalContent.population}
          region={modalContent.region}
          flags={modalContent.flags}
          subregion={modalContent.subregion}
          nativeName={modalContent.name.official}
          closeModal={showCountry}
        />
      )}
    </>
  )
}

export default Countries
