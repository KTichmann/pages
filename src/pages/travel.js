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
      <div className="travel-selection">
        <div className="travel-selection__header">
          <span>VIEW DEPARTURES</span>
          <span>VIEW ARRIVALS</span>
        </div>
      </div>
    </Layout>
  )
}

export default Travel
