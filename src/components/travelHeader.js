import PropTypes from "prop-types"
import React from "react"
import "../styles/travelHeader.css"

const TravelHeader = () => {
  return (
    <nav className="d-flex position-fixed flex-row justify-content-between">
      <div className="d-flex flex-row">
        <div className="logo">bOnline</div>
        <ul className="d-flex flex-row list-group-flush">
          <li className="list-group-item">Flights</li>
          <li className="list-group-item">Parking</li>
          <li className="list-group-item">Transport</li>
          <li className="list-group-item">At the Airport</li>
          <li className="list-group-item">Help</li>
        </ul>
      </div>
      <div>
        <div className="booking">My Booking</div>
        <div className="search" />
      </div>
    </nav>
  )
}

TravelHeader.propTypes = {}

TravelHeader.defaultProps = {}

export default TravelHeader
