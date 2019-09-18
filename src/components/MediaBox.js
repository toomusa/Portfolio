import React from "react";
import { Link } from 'react-router-dom'
import MediaImage from "../assets/images/MediaImage.png"

export default function MediaBox(props) {
  return (
    <div id="mediaBox">
      <Link to="/media" onClick={() => props.activate("/media")} >
        <h5>Media</h5>
        <img src={MediaImage} alt="Media" id="mediaImage" />
      </Link>
    </div>
  )
}
