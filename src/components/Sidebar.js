import React from "react";
// import { Link } from 'react-router-dom';
import StoryImage from "../assets/images/StoryImage.png"
import resume from "../assets/files/Musa_Akbari_Resume.pdf"

export default function StoryBox() {
  return (
    <div id="sidebarDiv">
      <div id="imageBox">
        <img src={StoryImage} alt="My Story" id="storyImage" />
        <h5 id="nameTxt">Musa Akbari</h5>
        <h5 id="titleTxt">Full-Stack Developer</h5>
        <hr></hr>
      </div>
      <div className="container-fluid" id="infoBox">
        <div className="row infoRow">
          <div className="col-md-11 col-sm-11 col-xs-11" id="icons">
            <a href="mailto:musa.akbari@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope iconImg iconUnSpacer">
                <span className="spacer"></span>
                <span className="infoTxt">musa.akbari@gmail.com</span></i>
            </a>
          </div>
        </div>
        <div className="row infoRow">
          <div className="col-md-11 col-sm-11 col-xs-11" id="icons">
            <i className="fas fa-mobile-alt iconImg iconSpacer">
              <span className="spacer"></span>
              <span className="infoTxt">(415) 377-3802</span></i>
          </div>
        </div>
        <div className="row infoRow">
          <div className="col-md-11 col-sm-11 col-xs-11" id="icons">
            <a href="https://www.linkedin.com/in/musaakbari/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin iconImg">
                <span className="spacer"></span>
                <span className="infoTxt">Linkedin</span></i>
            </a>
          </div>
        </div>
        <div className="row infoRow">
          <div className="col-md-11 col-sm-11 col-xs-11" id="icons">
            <a href="https://github.com/toomusa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square iconImg">
                <span className="spacer"></span>
                <span className="infoTxt">Github</span></i>
            </a>
          </div>
        </div>
        <div className="row infoRow">
          <div className="col-md-11 col-sm-11 col-xs-11" id="icons">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file iconImg iconSpacer2">
                <span className="spacer"></span>
                <span className="infoTxt">Resume PDF</span></i>
            </a>
          </div>
        </div>
      </div>
      {/* <h4>Tech Stack</h4> */}
      <hr></hr>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div id="stackDiv">

              <div className="iconBlock">
                <div className="iconBox"><i className="devicon-mongodb-plain stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-express-original stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-react-original stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-nodejs-plain stackIcon"></i></div>
              </div>
              <div className="iconBlock">
                <div className="iconBox"><i className="devicon-jquery-plain stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-mysql-plain stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-heroku-original stackIcon"></i></div>
                <div className="iconBox"><span className="iconify stackImg" data-icon="simple-icons:redux" data-inline="true" data-width="50" data-height="50"></span></div>
              </div>
              <div className="iconBlock">
                <div className="iconBox"><i className="devicon-javascript-plain stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-html5-plain stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-css3-plain stackIcon"></i></div>
                <div className="iconBox"><i className="devicon-bootstrap-plain stackIcon"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
