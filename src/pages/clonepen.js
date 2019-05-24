import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { withStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import Card from "../components/clonepenCard"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"
import user from "../images/user.jpg"
import microphone from "../images/microphone.png"
import paper from "../images/paper.png"
import live from "../images/live.jpg"
import workHarder from "../images/workHarder.jpg"
import Footer from "../components/footer"

const theme = createMuiTheme({
  root: {
    backgroundColor: "green",
  },
  typography: {
    color: "white",
  },
  overrides: {
    MuiTypography: {
      color: "white",
      body1: {
        color: "white",
      },
      subheading: {
        color: "white",
      },
    },
  },
})

const styles = theme => ({
  search: {
    display: "flex",
    width: "85%",
  },
  appBar: {
    marginLeft: "8rem",
    padding: ".3rem 1rem",
    backgroundColor: "#131418",
    width: "90%",
  },
  searchBar: {
    backgroundColor: "#e3e4e9",
    padding: ".3rem .5rem",
    borderRadius: "5px",
    width: "95%",
  },
  drawer: {
    backgroundColor: "#1e1f26",
  },
  contentWrapper: {
    backgroundColor: "#1e1f26",
    height: "100%",
    width: "100%",
  },
  root: {
    fontSize: ".8rem",
  },
  mainContent: {
    padding: "2rem 13rem",
    color: "white",
  },
  paper: {
    border: "none",
  },
})

class ClonePen extends React.Component {
  componentDidMount() {
    document.querySelector("body").style.backgroundColor = "#131418"
  }
  componentWillUnmount() {
    document.querySelector("body").style.backgroundColor = "#fff"
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ width: "100%" }}>
          <AppBar className={this.props.classes.appBar} position="static">
            <Toolbar>
              <div className={this.props.classes.search}>
                <div style={{ paddingRight: "1rem", paddingTop: ".3rem" }}>
                  <SearchIcon />
                </div>
                <InputBase
                  className={this.props.classes.searchBar}
                  placeholder="Search…"
                />
              </div>
              <a color="inherit" className="pl-5">
                Login
              </a>
            </Toolbar>
          </AppBar>
          <Drawer
            classes={{ paper: this.props.classes.paper }}
            className={this.props.classes.drawer}
            variant="permanent"
            anchor="left"
          >
            <div className={this.props.classes.contentWrapper}>
              <h5
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "1.5rem",
                  padding: "0rem 1.2rem",
                }}
              >
                ClonePen
              </h5>
              <hr
                style={{
                  height: "5rem",
                  height: ".2rem",
                  background:
                    "linear-gradient(70deg,#0ebeff,#ffdd40,#ae63e4,#47cf73)",
                }}
              />
              <h3
                style={{
                  color: "#0ebeff",
                  fontSize: ".8rem",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                YOUR
              </h3>
              <List>
                {["Dashboard", "Profile", "Pinned Items", "Activity"].map(
                  text => (
                    <ListItem button key={text}>
                      <div style={{ color: "white", fontSize: ".8rem" }}>
                        {text}
                      </div>
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
              <h3
                style={{
                  color: "#ffdd40",
                  fontSize: ".8rem",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                EXPLORE
              </h3>
              <List>
                {["Picked", "Popular", "Following", "Topics"].map(text => (
                  <ListItem button key={text}>
                    <div style={{ color: "white", fontSize: ".8rem" }}>
                      {text}
                    </div>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <h3
                style={{
                  color: "#47cf73",
                  fontSize: ".8rem",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                GROW
              </h3>
              <List>
                {["Jobs", "Blog", "Challenges"].map(text => (
                  <ListItem button key={text}>
                    <div style={{ color: "white", fontSize: ".8rem" }}>
                      {text}
                    </div>
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </div>
        <div className={this.props.classes.mainContent}>
          <h1 style={{ fontWeight: 900 }}>Picked Pens</h1>
          <hr style={{ height: "4px", backgroundColor: "#0ebeff" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "6rem" }}>
          <Card
            img="https://picsum.photos/200/300"
            userImg={user}
            hoverText="Lorem ipsum dolor sit amet"
            username="someGuy"
            title="Lorem Ipsum"
          />
          <Card
            img="https://picsum.photos/200/300"
            userImg={user}
            hoverText="This is how we do it"
            username="someGal"
            title="Monkeys?"
          />
          <Card
            img="https://picsum.photos/200/300"
            userImg={user}
            hoverText="Got the inspiration for this from my dog, Max"
            username="person"
            title="The Goodest Boy"
          />
          <Card
            img="https://picsum.photos/200/300"
            userImg={user}
            hoverText="We're working towards a better world, hope this pen helps."
            username="pupper"
            title="Woof!"
          />
          <Card
            img="https://picsum.photos/200/300"
            userImg={user}
            hoverText="He got toejam football, he one holy roller, he got hair down to his knees, got to be good looking 'cos he's so hard to please."
            username="developer"
            title="come together"
          />
          <Card
            img="https://picsum.photos/200/300"
            userImg={user}
            hoverText="Not all who wonder are lost"
            username="Gandalf"
            title="A Wizard is Never Late"
          />
        </div>
        <div
          style={{
            backgroundColor: "#1e1f26",
            paddingLeft: "14rem",
            color: "white",
          }}
          className="py-5 d-flex justify-content-between"
        >
          <div>
            <img src={microphone} alt="microphone" style={{ height: "60px" }} />
            <h3 className="bold">Trending Topics</h3>
            <h4 className="bold mt-3" style={{ color: "#0ebeff" }}>
              Trash Can
            </h4>
            <small style={{ display: "block" }}>May 05 2019</small>
            <button
              className="btn btn-primary mt-3"
              style={{ backgroundColor: "#444857", borderColor: "none" }}
            >
              Read
            </button>
          </div>
          <div className="">
            <div className="d-flex">
              <img
                src={paper}
                alt="paper"
                className="mr-3 mt-2"
                style={{ height: "50px" }}
              />
              <div className="mb-5">
                <p className="bold mb-1">New</p>
                <p className="bold mb-2" style={{ color: "#0ebeff" }}>
                  Lorem ipsum dolor sit
                </p>
                <small style={{ display: "block" }}>May 05 2019</small>
              </div>
            </div>
            <div className="d-flex">
              <img src={microphone} alt="" style={{ height: "60px" }} />
              <div className="mb-5">
                <p className="bold mb-1">New</p>
                <p className="bold mb-2" style={{ color: "#0ebeff" }}>
                  Lorem ipsum dolor sit
                </p>
                <small style={{ display: "block" }}>May 05 2019</small>
              </div>
            </div>
          </div>
          <div />
        </div>
        <div className={this.props.classes.mainContent}>
          <h1 style={{ fontWeight: 900 }}>Picked Projects</h1>
          <hr style={{ height: "4px", backgroundColor: "#ffdd40" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "6rem" }}>
          <Card
            img={live}
            userImg={user}
            hoverText="Lorem ipsum dolor sit amet"
            username="backend bob"
            title="Let's get this project started"
          />
          <Card
            img={live}
            userImg={user}
            hoverText="This is how we do it"
            username="frank"
            title="Monkeys are strange..?"
          />
          <Card
            img={live}
            userImg={user}
            hoverText="Got the inspiration for this from my dog, Max"
            username="frontend dave"
            title="Amazeballs project"
          />
        </div>
        <div className={this.props.classes.mainContent}>
          <h1 style={{ fontWeight: 900 }}>Picked Posts</h1>
          <hr style={{ height: "4px", backgroundColor: "#47cf73" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "6rem" }}>
          <Card
            img={workHarder}
            userImg={user}
            hoverText="Lorem ipsum dolor sit amet"
            username="backend bob"
            title="Let's get this project started"
          />
          <Card
            img={workHarder}
            userImg={user}
            hoverText="This is how we do it"
            username="frank"
            title="Monkeys are strange..?"
          />
          <Card
            img={workHarder}
            userImg={user}
            hoverText="Got the inspiration for this from my dog, Max"
            username="frontend dave"
            title="Amazeballs project"
          />
        </div>
        <Footer styles={{ backgroundColor: "#1e1f26" }} />
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(ClonePen)
