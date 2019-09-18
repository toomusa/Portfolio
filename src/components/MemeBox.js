import React from "react";
import { Link } from 'react-router-dom'
import MemeImage from "../assets/images/MemeImage.jpg"

export default function MemeBox(props) {
  return (
    <div id="memeBox">
      <Link to="/memes" onClick={() => props.activate("/memes")} >
        <h5>Memes</h5>
        <img src={MemeImage} alt="Memes" id="memeImage" />
      </Link>
    </div>
  )
}
