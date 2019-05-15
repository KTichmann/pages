import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { fade } from "@material-ui/core/styles/colorManipulator"
import { withStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

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
    width: "100%",
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

const ClonePen = props => {
  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      document.querySelector("body").style.backgroundColor = "#131418"
    })
  }
  const classes = props.classes
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ width: "100%" }}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <div className={classes.search}>
              <div style={{ paddingRight: "1rem", paddingTop: ".3rem" }}>
                <SearchIcon />
              </div>
              <InputBase className={classes.searchBar} placeholder="Search…" />
            </div>
            <a color="inherit">Login</a>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{ paper: classes.paper }}
          className={classes.drawer}
          variant="permanent"
          anchor="left"
        >
          <div className={classes.contentWrapper}>
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
      <div className={classes.mainContent}>
        <h1 style={{ fontWeight: 900 }}>Picked Pens</h1>
        <hr style={{ height: "4px", backgroundColor: "#0ebeff" }} />
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(ClonePen)
