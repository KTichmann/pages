import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import PaymentHeader from "./paymentHeader"

const Header = ({ siteTitle, site }) => {
  const switchHeaders = site => {
    switch (site) {
      case "payment":
        return <PaymentHeader />
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
