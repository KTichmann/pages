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

const styles = theme => ({
  search: {
    display: "flex",
    width: "85%",
  },
  appBar: {
    marginLeft: "9rem",
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
})

const ClonePen = props => {
  const classes = props.classes
  return (
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
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <div className={classes.contentWrapper}>
          <Divider />
          <List>
            {["Dashboard", "Profile", "Pinned Items"].map(text => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default withStyles(styles)(ClonePen)
