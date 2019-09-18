import React from "react";
import { Link } from 'react-router-dom'
import ProjectImage from "../assets/images/ProjectImage.png"

export default function ProjectsBox(props) {
  return (
    <div id="projectsBox">
      <Link to="/projects" onClick={() => props.activate("/projects")} >
        <h5>Projects</h5>
        <img src={ProjectImage} alt="Projects" id="projectsImage" />
      </Link>
    </div>
  )
}
