import React from "react";
import { Link } from 'react-router-dom'
import Genie from "../assets/images/Genie.png"

export default function AboutBox(props) {
  return (
    <div id="aboutBox">
      <Link to="/about" onClick={() => props.activate("/about")} >
        <h5>About</h5>
        <img src={Genie} alt="About" id="aboutImage" />
      </Link>
    </div>
  )
}
