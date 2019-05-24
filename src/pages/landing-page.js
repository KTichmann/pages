import React from "react"
import laptop from "../images/laptop.png"
import "../styles/landing-page.css"
import card from "../images/card.png"
import coins from "../images/coins.png"
import refund from "../images/refund.png"
import logoOne from "../images/logo-1.png"
import logoTwo from "../images/logo-2.png"
import logoThree from "../images/logo-3.png"
import logoFour from "../images/logo-4.png"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <div
      className="landing-header text-center pt-5"
      style={{ backgroundColor: "#5c6ac4" }}
    >
      <div className="logo mb-5">
        <h5>LOGO</h5>
      </div>
      <h1
        style={{ fontSize: "3rem", fontWeight: 600 }}
        className="mb-3 px-5 px-md-0"
      >
        Sell online with us
      </h1>
      <h3 className="mb-4 px-5 px-md-0">Trusted by everyone, hated by none</h3>
      <div className="freeTrial d-flex justify-content-center mb-1 px-5 px-md-0 flex-column flex-md-row">
        <input
          style={{ width: "15rem" }}
          className="form-control mr-md-4 mr-auto ml-auto ml-md-0 mb-4 mb-md-0"
          type="text"
          placeholder="enter your email address"
        />
        <button
          className="btn  mx-auto mx-md-0"
          style={{ backgroundColor: "rgb(4,4,4)", color: "white" }}
        >
          Start a free trial
        </button>
      </div>
      <small
        style={{ display: "block", color: "white" }}
        className="mb-4 mt-3 px-5 px-md-0"
      >
        Try our services for 14 days for free. No credit card required.
      </small>
      <img src={laptop} alt="laptop" className="laptop" />
      <div class="curve">
        <svg viewBox="0 0 50 50" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0,10 C15,20 35,0 50,10 L50,00 L0,0 Z"
            style={{ stroke: "none", fill: "#5c6ac4" }}
          />
        </svg>
      </div>
    </div>
    <div className="products container pt-3">
      <div className="row">
        <div className="col-md-4">
          <img src={card} className="icon" alt="icon" />
          <h6 className="bold">Lorem ipsum dolor</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia totam dolor aliquam, molestias.
          </p>
        </div>
        <div className="col-md-4">
          <img src={coins} className="icon" alt="icon" />
          <h6 className="bold">Lorem ipsum dolor</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia totam dolor aliquam.
          </p>
        </div>
        <div className="col-md-4">
          <img src={refund} className="icon" alt="icon" />
          <h6 className="bold">Lorem ipsum dolor</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia totam dolor aliquam, molestias quos nam.
          </p>
        </div>
      </div>
    </div>
    <div className="partners d-flex justify-space-between">
      <img src={logoOne} alt="logoOne" />
      <img src={logoTwo} alt="logoTwo" />
      <img src={logoThree} alt="logoThree" />
      <img src={logoFour} alt="logoFour" />
    </div>
    <div className="quote text-center">
      <h5 className="bold" style={{ width: "30%", margin: "0 auto" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        ducimus possimus ipsa.
      </h5>
      <div className="small mt-2">-LOREM IPSUM GUY</div>
      <button
        className="btn btn-primary mt-3 mb-5 bold"
        style={{
          backgroundColor: "rgb(92, 106, 196)",
          borderColor: "rgb(92, 106, 196)",
        }}
      >
        Give us a call
      </button>
    </div>
    <Footer styles={{ backgroundColor: "#5c6ac4" }} />
  </div>
)

export default IndexPage
