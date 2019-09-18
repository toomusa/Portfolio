import React from "react";
import Announcements from "../components/Announcements";
import ProjectsBox from "../components/ProjectsBox";
import AboutBox from "../components/AboutBox";
import MediaBox from "../components/MediaBox";
import MemeBox from "../components/MemeBox";

export default function Home(props) {
  return (
    <div className="container" id="home">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <Announcements />
        </div>
        <div className="col-md-5 col-sm-8 col-xs-12" id="homeText">
            <h5 className="homeTitle">Summary</h5>
          <div className="summaryBox">
            <p className="homeTxt">
              <span className="bold">Full Stack Developer</span> with a passion for solving complex problems and finding creative solutions.
              <br></br>
              <span className="listSpacer"></span>
              <span className="listSpacer"></span>
              <span className="bold">Team player</span> with a desire to learn and a drive to excel - thrives in collaborative environments.
              <br></br>
              <span className="listSpacer"></span>
              <span className="listSpacer"></span>
              <span className="bold">Excellent Communication</span> skills, written and verbal, with people at all levels.
              <br></br>
              <span className="listSpacer"></span>
              <span className="listSpacer"></span>
              <span className="bold">Adaptive</span> to competing priorities, organized, composed, proactive, and resillient.</p>              
          </div>
          <br></br>
            <h5 className="homeTitle">Technologies</h5>
          <div className="summaryBox">
            <span><strong>Frontend:</strong>  React/Redux, jQuery, Handlebars, HTML/CSS, Bootstrap<br></br></span>
            <span className="listSpacer"></span>
            <span className="listSpacer"></span>
            <span><strong>Backend:</strong>  JavaScript, Node, Express<br></br></span>
            <span className="listSpacer"></span>
            <span className="listSpacer"></span>
            <span><strong>Database:</strong>  MySQL, Mongo, Firebase, APIs<br></br></span>
            <span className="listSpacer"></span>
            <span className="listSpacer"></span>
            <span><strong>Experience:</strong>  MVC Model, User Authentication, WebSockets, UML Modeling<br></br></span>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 col-xs-12">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 linkBox">
                  <ProjectsBox {...props} />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 linkBox">
                  <AboutBox {...props} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 linkBox">
                  <MediaBox {...props} />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 linkBox">
                  <MemeBox {...props} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

