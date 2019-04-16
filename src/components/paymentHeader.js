import PropTypes from "prop-types"
import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "../styles/paymentHeader.css"

library.add(faChevronDown)

const PaymentHeader = () => {
  const dropDownHandler = type => {
    let typeElement = document.querySelector(`.${type}`)
    if (typeElement.style.height === "5rem") {
      typeElement.style.height = "0px"
    } else {
      typeElement.style.height = "20rem"
    }
  }
  return (
    <nav className="flex">
      <div className="flex main-nav">
        <div className="left-nav flex">
          <div className="logo">payments</div>
          <ul className="flex">
            <li
              onClick={() => {
                dropDownHandler("solutions")
              }}
            >
              Our Solutions
              <FontAwesomeIcon className="icon" icon="chevron-down" />
            </li>
            <li>
              Our Story
              <FontAwesomeIcon className="icon" icon="chevron-down" />
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right-nav">
          <span id="sign-in">
            Sign in <FontAwesomeIcon className="icon" icon="chevron-down" />
          </span>
          <button>Get Started</button>
        </div>
      </div>
      {/* START SOLUTIONS DROPDOWN */}
      <div className="solutions flex">
        <ul className="">
          <li>
            <img />
            <div>
              <p>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </li>
          <li>
            <img />
            <div>
              <p>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </li>
          <li>
            <img />
            <div>
              <p>Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </li>
        </ul>
        <ul className="solutions-right">
          <li>FooBar</li>
          <li>Foo</li>
          <li>Bar</li>
          <li>Baz</li>
        </ul>
      </div>
      {/* END SOLUTIONS DROPDOWN */}
    </nav>
  )
}

PaymentHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PaymentHeader.defaultProps = {
  siteTitle: ``,
}

export default PaymentHeader
