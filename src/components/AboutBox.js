import React from "react";
import { Link } from 'react-router-dom'
import Einstein from "../assets/images/Einstein.jpg"

export default function AboutBox(props) {
  return (
    <div id="aboutBox">
      <Link to="/about" onClick={() => props.activate("/about")} >
        <h5>About</h5>
        <img src={Einstein} alt="About" id="aboutImage" />
      </Link>
    </div>
  )
}
