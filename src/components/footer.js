import { Link } from "gatsby"
import React from "react"

const Footer = ({ styles }) => {
  return (
    <footer className="flex" style={{ ...styles }}>
      <ul>
        <li className="bold">Visit Another Page</li>
        <li>
          <Link to="/payment-solution">Payment Solution</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
        <li>
          <Link to="/clonepen">Clonepen</Link>
        </li>
        <li>
          <Link to="/landing-page">Landing Page</Link>
        </li>
      </ul>
      <ul>
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
