import PropTypes from "prop-types"
import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "../styles/paymentHeader.css"
import card from "../images/card.png"
import coins from "../images/coins.png"
import refund from "../images/refund.png"
import down from "../images/down.png"
import shop from "../images/shop.png"
import withdraw from "../images/withdraw.png"
import signIn from "../images/sign-in.png"
import menu from "../images/menu.png"

library.add(faChevronDown)

const PaymentHeader = () => {
  const handleClickOutside = type => {
    document.addEventListener("click", e => {
      let typeElement = document.querySelector(`.${type}`)
      if (typeElement.classList.contains("show") && e.target !== typeElement) {
        typeElement.classList.remove("show")
      }
    })
  }
  const handleMenuClose = () => {
    const query = window.matchMedia("(max-width: 766px)")
    document.addEventListener("click", e => {
      if (query.matches) {
        let menuDropdown = document.querySelector(".left-nav ul")
        let menuIcon = document.querySelector(".menu-responsive")

        menuDropdown.classList.add("hidden")
        menuIcon.classList.remove("hidden")
      }
    })
  }
  handleClickOutside("solutions")
  handleClickOutside("sign-in")
  handleClickOutside("story")
  handleMenuClose()

  const dropDownHandler = type => {
    let typeElement = document.querySelector(`.${type}`)
    typeElement.classList.add("show")
  }

  return (
    <nav className="flex">
      <div className="flex main-nav">
        <div className="left-nav flex">
          <div className="logo">payments</div>
          <div>
            <ul className="flex hidden">
              <li
                onClick={() => {
                  dropDownHandler("solutions")
                }}
              >
                Our Solutions
              </li>
              <li
                onClick={() => {
                  dropDownHandler("story")
                }}
              >
                Our Story
              </li>
              <li>Contact Us</li>
            </ul>
            <div
              className="menu-responsive"
              onClick={() => {
                document
                  .querySelector(".left-nav ul")
                  .classList.remove("hidden")
                document
                  .querySelector(".menu-responsive")
                  .classList.add("hidden")
              }}
            >
              <img src={menu} />
            </div>
          </div>
        </div>
        <div className="right-nav">
          <span onClick={() => dropDownHandler("sign-in")} id="sign-in">
            Sign in <FontAwesomeIcon className="icon" icon="chevron-down" />
          </span>
          <button>Get Started</button>
        </div>
      </div>
      {/* START SOLUTIONS DROPDOWN */}
      <div className="solutions flex">
        <ul className="solutions-left">
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="card icon" src={card} />
                <p className="bold small">Lorem Ipsum</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={coins} />
                <p className="bold small">Lorem Ipsum</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="refund icon" src={refund} />
                <p className="bold small">Lorem Ipsum</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
        </ul>
        <ul className="solutions-right">
          <li>
            <span className="bold">FooBar</span>
          </li>
          <li className="small">Foo</li>
          <li className="small">Bar</li>
          <li className="small">Baz</li>
        </ul>
      </div>
      {/* END SOLUTIONS DROPDOWN */}
      {/* START STORY DROPDOWN */}
      <div className="story flex">
        <ul className="story-left">
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={withdraw} />
                <p className="bold small">Lorem Ipsum</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={shop} />
                <p className="bold small">Lorem Ipsum</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={down} />
                <p className="bold small">Lorem Ipsum</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
        </ul>
        <ul className="story-right">
          <li className="bold">FooBar</li>
          <li className="small">Foo</li>
          <li className="small">Bar</li>
          <li className="small">Baz</li>
        </ul>
      </div>
      {/* END STORY DROPDOWN */}
      {/* START SIGNIN DROPDOWN */}
      <div className="sign-in" style={{ paddingLeft: "25rem" }}>
        <ul className="sign-in-left">
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={signIn} />
                <p className="bold small">Customer Portal</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={signIn} />
                <p className="bold small">Personal Banking</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
          <li>
            <div className="flex column">
              <div className="flex" style={{ height: "2.2rem" }}>
                <img alt="coins icon" src={signIn} />
                <p className="bold small">Reports</p>
              </div>
              <p
                style={{
                  marginLeft: "3.5rem",
                  fontSize: ".8rem",
                  marginTop: "-.9rem",
                }}
              >
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* END SIGNIN DROPDOWN */}
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
