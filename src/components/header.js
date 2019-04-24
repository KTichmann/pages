import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PaymentHeader from "./paymentHeader"
import TravelHeader from "./travelHeader"

const Header = ({ siteTitle, site }) => {
  const switchHeaders = site => {
    switch (site) {
      case "payment":
        return <PaymentHeader />
      case "travel":
        return <TravelHeader />
      default:
        return "test"
    }
  }
  return <header>{switchHeaders(site)}</header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
