import React from "react"
import "../styles/clonepenCard.css"
import eye from "../images/eye.png"
import comment from "../images/comment.png"
import love from "../images/love.png"

const Card = props => (
  <div className="clonepen-card">
    <div className="clonepen-overlay pt-4 pl-3">{props.hoverText}</div>
    <img src={props.img} className="clonepen-img" />
    <div className="meta ">
      <img src={props.userImg} />
      <div className="profile">
        <div className="title">{props.title}</div>
        <div className="username">{props.username}</div>
      </div>
    </div>
    <div className="hr" />
    <div className="info">
      <div style={{ display: "flex" }} className="block">
        <img className="small" src={eye} />
        <small>500</small>
      </div>
      <div style={{ display: "flex" }} className="block">
        <img className="small" src={comment} />
        <small>50</small>
      </div>
      <div style={{ display: "flex" }} className="block">
        <img className="small" src={love} />
        <small>1230</small>
      </div>
    </div>
  </div>
)

export default Card
