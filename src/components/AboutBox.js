import React from "react";
import { Link } from 'react-router-dom'
import AboutPhoto from "../assets/images/AboutPhoto.jpg"

export default function AboutBox(props) {
  return (
    <div id="aboutBox">
      <Link to="/about" onClick={() => props.activate("/about")} >
        <h5>About</h5>
        <img src={AboutPhoto} alt="About" id="aboutImage" />
      </Link>
    </div>
  )
}
