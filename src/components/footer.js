import { Link } from "gatsby"
import React from "react"

const Footer = ({ styles }) => {
  return (
    <footer className="flex flex-column flex-md-row" style={{ ...styles }}>
      <ul className="mb-5">
        <li className="bold">Visit Another Page</li>
        <li>
          <Link to="/payment-solution">Payment Solution</Link>
        </li>
        <li>Travel Site</li>
        <li>Something Else</li>
      </ul>
      <ul className="mb-5">
        <li className="bold">View My Portfolio</li>
        <li className="bold">Home</li>
        <li className="bold">Projects</li>
        <li className="bold">About</li>
      </ul>
      <ul>
        <li className="bold">Contact Me</li>
        <li>Contact Page</li>
        <li>Email: ktichmann@gmail.com</li>
        <li>LinkedIn</li>
      </ul>
    </footer>
  )
}

export default Footer
