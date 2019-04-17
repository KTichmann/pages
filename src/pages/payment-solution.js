import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import example from "../images/indexHeader.jpg"
import "../styles/payment-solution.css"
import logoOne from "../images/logo-1.png"
import logoTwo from "../images/logo-2.png"
import logoThree from "../images/logo-3.png"
import logoFour from "../images/logo-4.png"
import aboutOne from "../images/about1.jpg"
import aboutTwo from "../images/about2.jpg"
import aboutThree from "../images/about3.jpg"

const IndexPage = () => {
  window.addEventListener("scroll", e => {
    const scrolled = window.pageYOffset
    const subheadingOne = document.querySelector(".subheading-section--1")
    const headerTwo = document.querySelector(".header--2")
    const subheadingTwo = document.querySelector(".subheading-section--2")
    const headerThree = document.querySelector(".header--3")

    subheadingOne.style.top = `${-scrolled * 0.5}px`
    subheadingOne.style.opacity = `${1 - scrolled / window.innerHeight}`
    if (scrolled > headerTwo.offsetTop) {
      subheadingTwo.style.top = `${headerTwo.offsetTop -
        500 -
        scrolled * 0.5}px`

      subheadingTwo.style.opacity = `${1 * (headerTwo.offsetTop / scrolled)}`
    }
    let bounded = document.querySelector(".header--3").getBoundingClientRect()
    let h1 = document.querySelector(".header .header-text h1")
    if (bounded.top <= 0) {
      h1.style.top = `${headerThree.offsetTop}px`
      h1.style.position = "absolute"
    } else {
      h1.style.position = "fixed"
      h1.style.top = "65vh"
    }
  })
  return (
    <Layout site="payment">
      <div className="header header--1">
        <div className="header-text">
          <h1>Hello.</h1>
          <span className="subheading-section subheading-section--1">
            <h2 className="bold">Carefree Payments</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Reprehenderit distinctio dolor pariatur eum modi impedit.
            </p>
          </span>
        </div>
      </div>
      <div className="header header--2">
        <div className="header-text">
          <span className="subheading-section subheading-section--2">
            <h2 className="bold">In-Store Shenanigans</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Reprehenderit distinctio dolor pariatur eum modi impedit.
            </p>
          </span>
        </div>
      </div>
      <div className="header header--3">
        <div className="header-text">
          <span className="subheading-section subheading-section--3">
            <h2 className="bold">Adverb Verb</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Reprehenderit distinctio dolor pariatur eum modi impedit.
            </p>
          </span>
        </div>
      </div>
      <div className="about">
        <div className="about-section">
          <img alt="example" src={aboutOne} />
          <div className="about-section-wording">
            <small className="bold">Lorem Ipsum Dolor</small>
            <h3>We're alright at a bunch of things</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              explicabo et ipsum omnis vero hic unde consequatur architecto.
              Assumenda molestiae repellendus eius enim facere eos vero id
              explicabo repellat possimus? Assumenda molestiae repellendus eius
              enim facere eos vero id explicabo repellat possimus
            </p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-wording">
            <small className="bold">Lorem Ipsum Dolor</small>
            <h3>
              We're skilled in at least <em>two</em> areas
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              explicabo et ipsum omnis vero hic unde consequatur architecto.
              Assumenda molestiae repellendus eius enim facere eos vero id
              explicabo repellat possimus? Assumenda molestiae repellendus eius
              enim facere eos vero id explicabo repellat possimus
            </p>
          </div>
          <img alt="example" src={aboutTwo} />
        </div>
        <div className="about-section">
          <img alt="example" src={aboutThree} />
          <div className="about-section-wording">
            <small className="bold">All the stuff!</small>
            <h3>We know how to do stuff</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              explicabo et ipsum omnis vero hic unde consequatur architecto.
              Assumenda molestiae repellendus eius enim facere eos vero id
              explicabo repellat possimus? Assumenda molestiae repellendus eius
              enim facere eos vero id explicabo repellat possimus
            </p>
          </div>
        </div>
      </div>
      <div className="banner">
        <h2>We've worked with all sorts of companies.</h2>
        <div className="flex logos">
          <img src={logoOne} alt="logo" />
          <img src={logoTwo} alt="logo" />
          <img src={logoThree} alt="logo" />
          <img src={logoFour} alt="logo" />
        </div>
      </div>
      <div className="blog">
        <small className="bold">Lorem Ipsum Dolor</small>
        <h3>Our Blog</h3>
        <div className="row flex">
          <div className="el">
            <img src={aboutThree} alt="blog-img" />
            <h6>Lorem Ipsum Dolor Sit</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ea voluptatibus at iusto reiciendis, neque velit, rem
              exercitationem laboriosam veniam beatae unde, ut hic consequuntur
              sed explicabo vero ducimus ipsa.
            </p>
          </div>
          <div className="el">
            <img src={aboutThree} alt="blog-img" />
            <h6>Lorem Ipsum Dolor Sit</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ea voluptatibus at iusto reiciendis, neque velit, rem
              exercitationem laboriosam veniam beatae unde, ut hic consequuntur
              sed explicabo vero ducimus ipsa.
            </p>
          </div>
          <div className="el">
            <img src={aboutThree} alt="blog-img" />
            <h6>Lorem Ipsum Dolor Sit</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ea voluptatibus at iusto reiciendis, neque velit, rem
              exercitationem laboriosam veniam beatae unde, ut hic consequuntur
              sed explicabo vero ducimus ipsa.
            </p>
          </div>
        </div>
        <div className="row" />
      </div>
    </Layout>
  )
}

export default IndexPage
