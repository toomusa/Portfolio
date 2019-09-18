import React from "react";
import Navi from "./Navbar";

function Header(props) {
  return (
    <div className="page-header" id="heading">
      {/* <h2>Personal Portfolio</h2> */}
      <Navi activate={props.activate} home={props.home} about={props.about}
                projects={props.projects} media={props.media} memes={props.memes} />
    </div>
  );
}

export default Header;