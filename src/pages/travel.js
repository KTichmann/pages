import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../styles/travel.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Footer from "../components/footer"
import oldPeople from "../images/oldPeople.jpg"
import peopleScreaming from "../images/peopleScreaming.jpg"
import bloodyHands from "../images/bloodyHands.jpg"
import durban from "../images/durban.jpg"
import capeTown from "../images/capeTown.jpg"
import joburg from "../images/joburg.jpg"
import kruger from "../images/kruger.jpg"
import travel from "../images/travel.png"
import children from "../images/children.png"
import bag from "../images/bag.png"
import wheelchair from "../images/wheelchair.png"
import passport from "../images/passport.png"
import security from "../images/security.png"

const Travel = () => {
  return (
    <Layout site="travel">
      <div className="travel-header">
        <h1>
          <span className="white-bg p-2">New York</span> <br />
          <span className="white-bg p-2">International Airport</span>
        </h1>
      </div>
      <div className="container travel-selection">
        <div className="travel-selection__header row">
          <span
            className="col-md-4 col-12"
            style={{ borderRight: "1px solid rgba(0,0,0,.2)" }}
          >
            VIEW DEPARTURES
          </span>
          <span className="col-md-4 col-12">VIEW ARRIVALS</span>
          <div className="col-md-4" />
        </div>
        <div
          className="travel-selection__form"
          style={{ backgroundColor: "white" }}
        >
          <div className="row">
            <div
              className="list-group col-6 d-flex flex-row ml-5 text-center"
              id="list-tab"
              role="tablist"
            >
              <a
                className="list-group-item list-group-item-action active"
                id="list-home-list"
                data-toggle="list"
                href="#list-home"
                role="tab"
                aria-controls="home"
              >
                Flights
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-profile-list"
                data-toggle="list"
                href="#list-profile"
                role="tab"
                aria-controls="profile"
              >
                Lounges
              </a>
              <a
                className="list-group-item list-group-item-action"
                id="list-messages-list"
                data-toggle="list"
                href="#list-messages"
                role="tab"
                aria-controls="messages"
              >
                Fast Track
              </a>
            </div>
            <div className="col-6" />
          </div>
          <div className="tab-content row" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <div className="d-flex justify-content-between list-home-inner">
                <form>
                  <div class="form-group d-flex ml-5 mt-1">
                    <select class="form-control form-control-md mr-3">
                      <option>New York</option>
                      <option>Boston</option>
                      <option>Cape Town</option>
                    </select>
                    <p class="mx-3 mt-2">TO</p>
                    <select class="form-control form-control-md ml-3">
                      <option>New York</option>
                      <option>Boston</option>
                      <option>Cape Town</option>
                    </select>
                  </div>
                </form>
                <button type="button" class="btn yellow px-3 py-3">
                  See Flights
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <div className="d-flex justify-content-between">
                <div style={{ width: "65%" }}>
                  <h5 className="ml-5">Travel somewhere nice this winter.</h5>
                  <p className="ml-5 mt-3">
                    When you play the game of thrones, you win or you die. What
                    is dead may never die. I would like a trial by combat. It is
                    rare to meet a Lannister who shares my enthusiasm for dead
                    Lannisters.
                  </p>
                </div>
                <button type="button" class="btn yellow px-3 py-3 mt-3">
                  Choose a Lounge
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <div className="d-flex justify-content-between">
                <div style={{ width: "65%" }}>
                  <h5 className="ml-5">Long summer is here!</h5>
                  <p className="ml-5 mt-3">
                    And now his watch is ended. Never Resting. Fire and blood.
                    The wolf and the lion. I pledge my life and honor to the
                    Night's Watch, for this night and all the nights to come.
                  </p>
                </div>
                <button type="button" class="btn yellow px-3 py-3 mt-3">
                  Join the Fast Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container lounges">
        <div className="row d-flex justify-content-around">
          <div className="col-6">
            <small style={{ borderBottom: "3px solid #fbe20a" }}>
              Pick a Lounge
            </small>
            <h2 className="mt-3">
              Put the treat into your retreat with a stay in our 3 lounges
            </h2>
          </div>
          <div className="col-6 pl-5">
            <p style={{ width: "50%", margin: "3rem auto" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div
          id="peopleCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#peopleCarousel" data-slide-to="1" />
            <li data-target="#peopleCarousel" data-slide-to="2" />
          </ol>
          <div class="carousel-inner" style={{ height: "25rem" }}>
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={peopleScreaming}
                alt="People at a concert"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati.
              </p>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={oldPeople} alt="Two old people" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati aliquid alias.
              </p>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src={bloodyHands}
                alt="Bloody hands forming a heart"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati aliquid alias consequuntur.
              </p>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#peopleCarousel"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#peopleCarousel"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn yellow">See more</button>
        </div>
      </div>
      <div className="container mt-5">
        <small style={{ borderBottom: "3px solid #fbe20a" }}>
          WHAT TO DO ON HOLIDAY
        </small>
        <div className="row mt-4">
          <div className="whatToDoBox col-md-4">
            <img alt="old people" src={oldPeople} />
            <h6>Lorem Ipsum Dolor</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              officiis, delectus, iure sint distinctio consequuntur temporibus
              optio nihil rem.
            </p>
            <a href="#" className="btn yellow">
              Learn More
            </a>
          </div>
          <div className="whatToDoBox col-md-4">
            <img alt="old people" src={oldPeople} />
            <h6>Lorem Ipsum Dolor</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              officiis, delectus, iure sint distinctio consequuntur temporibus
              optio nihil rem.
            </p>
            <a href="#" className="btn yellow">
              Learn More
            </a>
          </div>
          <div className="whatToDoBox col-md-4">
            <img alt="old people" src={oldPeople} />
            <h6>Lorem Ipsum Dolor</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              officiis, delectus, iure sint distinctio consequuntur temporibus
              optio nihil rem.
            </p>
            <a href="#" className="btn yellow">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <small style={{ borderBottom: "3px solid #fbe20a" }}>
          FEATURED DESTINATIONS
        </small>
        <h2 className="mt-3 mb-4">Exciting Adventures Start Here</h2>
        <div className="row">
          <div className="col-md-3 travel-adventures p-5">
            <p style={{ borderBottom: "1px solid #fbe20a" }} className="pb-2">
              #CapeTown
            </p>
            <h2>01</h2>
            <img src={capeTown} alt="" />
          </div>
          <div className="col-md-3 travel-adventures p-5">
            <p style={{ borderBottom: "1px solid #fbe20a" }} className="pb-2">
              #Joburg
            </p>
            <h2>02</h2>
            <img src={joburg} alt="" />
          </div>
          <div className="col-md-3 travel-adventures p-5">
            <p style={{ borderBottom: "1px solid #fbe20a" }} className="pb-2">
              #Durban
            </p>
            <h2>03</h2>
            <img src={durban} alt="" />
          </div>
          <div className="col-md-3 travel-adventures p-5">
            <p style={{ borderBottom: "1px solid #fbe20a" }} className="pb-2">
              #KrugerPark
            </p>
            <h2>04</h2>
            <img src={kruger} alt="" />
          </div>
        </div>
      </div>
      <div className="my-5 container">
        <small style={{ borderBottom: "3px solid #fbe20a" }}>HELP</small>
        <h2 className="mt-3 mb-4">Let us help with your journey</h2>
        <div class="row">
          <div className="col-md-3 guide-box">
            <img src={travel} />
            <h6>Checking in</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3 offset-md-1 guide-box">
            <img src={bag} />
            <h6>Packing your luggage</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3 offset-md-1 guide-box">
            <img src={children} />
            <h6>Travelling with children</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div class="row mt-5">
          <div className="col-md-3 guide-box">
            <img src={passport} />
            <h6>Travel documents</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3 offset-md-1 guide-box">
            <img src={security} />
            <h6>Getting through security</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-3 offset-md-1 guide-box">
            <img src={wheelchair} />
            <h6>Special assistance</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <button className="btn yellow mt-4">Read More Guides</button>
      </div>
      <Footer styles={{ backgroundColor: "#666" }} />
    </Layout>
  )
}

export default Travel
