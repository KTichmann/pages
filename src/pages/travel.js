import React from "react"
import Layout from "../components/layout"
import "../styles/travel.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Travel = () => {
  return (
    <Layout site="travel">
      <div className="travel-header">
        <h1>
          <span class="white-bg p-2">New York</span> <br />
          <span class="white-bg p-2">International Airport</span>
        </h1>
      </div>
      <div className="container travel-selection">
        <div className="travel-selection__header row">
          <span
            className="col-md-4 col-12"
            style={{ borderRight: "1px solid rgba(0,0,0,.2)" }}
          >
            VIEW DEPARTURES
          </span>
          <span className="col-md-4 col-12">VIEW ARRIVALS</span>
          <div className="col-md-4" />
        </div>
        <div className="travel-selection__form">
        
        </div>
      </div>
    </Layout>
  )
}

export default Travel
