import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <div
      className="landing-header text-center pt-5"
      style={{ backgroundColor: "#5c6ac4" }}
    >
      <div className="logo mb-5">
        <h5>LOGO</h5>
      </div>
      <h1 style={{ fontSize: "3rem", fontWeight: 600 }} className="mb-3">
        Sell online with us
      </h1>
      <h3 className="mb-4">Trusted by everyone, hated by noone</h3>
      <div className="freeTrial d-flex justify-content-center mb-1">
        <input
          style={{ width: "20rem" }}
          className="form-control mr-4"
          type="text"
          placeholder="enter your email address"
        />
        <button className="btn" style={{ backgroundColor: "rgb(4,4,4)" }}>
          Start a free trial
        </button>
      </div>
      <small style={{ display: "block" }} className="mb-4">
        Try our services for 14 days for free. No credit card required.
      </small>
      <img src="" alt="laptop" />
    </div>
    <div className="products container">
      <div className="row">
        <div className="col-md-4">
          <img src="" alt="icon" />
          <h6>Lorem ipsum dolor</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia totam dolor aliquam, molestias quos nam alias odio mollitia
            dolorum officiis omnis nesciunt quae ipsa id molestiae possimus
            necessitatibus. Temporibus.
          </p>
        </div>
        <div className="col-md-4">
          <img src="" alt="icon" />
          <h6>Lorem ipsum dolor</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia totam dolor aliquam, molestias quos nam alias odio mollitia
            dolorum officiis omnis nesciunt quae ipsa id molestiae possimus
            necessitatibus. Temporibus.
          </p>
        </div>
        <div className="col-md-4">
          <img src="" alt="icon" />
          <h6>Lorem ipsum dolor</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quia totam dolor aliquam, molestias quos nam alias odio mollitia
            dolorum officiis omnis nesciunt quae ipsa id molestiae possimus
            necessitatibus. Temporibus.
          </p>
        </div>
      </div>
    </div>
    <div className="partners d-flex justify-space-between">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
    <div className="reasons">
      <h4>Reasons to choose us</h4>
      <div className="reason">
        <img src="" alt="" />
        <div className="text">
          <h6>Reason One</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus eius facilis, officia ipsum accusantium tenetur
            labore error veniam
          </p>
        </div>
      </div>
      <div className="reason">
        <img src="" alt="" />
        <div className="text">
          <h6>Reason Two</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus eius facilis, officia ipsum accusantium tenetur
            labore error veniam
          </p>
        </div>
      </div>
      <div className="reason">
        <img src="" alt="" />
        <div className="text">
          <h6>Reason Three</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus eius facilis, officia ipsum accusantium tenetur
            labore error veniam
          </p>
        </div>
      </div>
      <div className="reason">
        <img src="" alt="" />
        <div className="text">
          <h6>Reason Four</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus eius facilis, officia ipsum accusantium tenetur
            labore error veniam
          </p>
        </div>
      </div>
      <div className="reason">
        <img src="" alt="" />
        <div className="text">
          <h6>Reason Five</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            necessitatibus eius facilis, officia ipsum accusantium tenetur
            labore error veniam
          </p>
        </div>
      </div>
    </div>
    <div className="quote">
      <h6>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        ducimus possimus ipsa.
      </h6>
      <small>-LOREM IPSUM GUY</small>
      <button className="btn btn-primary">Give us a call</button>
    </div>
  </div>
)

export default IndexPage
