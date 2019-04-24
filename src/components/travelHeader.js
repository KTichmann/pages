import React from "react"
import "../styles/travelHeader.css"

const TravelHeader = () => {
  return (
    <nav className="d-flex position-fixed flex-row justify-content-between">
      <div className="d-flex flex-row">
        <div className="logo mt-4">bOnline</div>
        <ul className="d-flex flex-row">
          <li className="list-group-item border-0">
            <a href="#">Flights</a>
          </li>
          <li className="list-group-item border-0">
            <a href="#">Parking</a>
          </li>
          <li className="list-group-item border-0">
            <a href="#">Transport</a>
          </li>
          <li className="list-group-item border-0">
            <a href="#">At the Airport</a>
          </li>
          <li className="list-group-item border-0">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className="right-section p-4">
        <div className="booking">My Booking</div>
        <div className="search" />
      </div>
    </nav>
  )
}

TravelHeader.propTypes = {}

TravelHeader.defaultProps = {}

export default TravelHeader
