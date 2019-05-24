import React from "react"
import "../styles/travelHeader.css"

const TravelHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-row p-4">
      <a className="navbar-brand logo" href="#">
        Travel
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ boxShadow: "none", border: "none" }}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Travel
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Airport
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              At the airport
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Help
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 d-none d-lg-block">
          <input
            className="form-control mr-sm-2 mr-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            style={{
              color: "black",
              borderColor: "#fbe20a",
              backgroundColor: "#fbe20a",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

TravelHeader.propTypes = {}

TravelHeader.defaultProps = {}

export default TravelHeader

/*
  <nav className="d-flex position-fixed flex-row justify-content-between travel-nav">
      <div className="d-flex flex-row">
        <div className="logo mt-4">Travel</div>
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
*/
