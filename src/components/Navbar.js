
import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Navigation(props) {
    return (
      <div>
        <div id="pageHeading">
          {/* <span>Welcome</span> */}
        </div>
        <Container id="navContainer">
          <Navbar expand="md" id="navbar" >
            <Nav className="ml-auto" id="navbar-menu" >
              <Link to="/" className={props.home} onClick={() => props.activate("/")} id="link"><span>Home</span></Link>
              <Link to="/about" className={props.about} onClick={() => props.activate("/about")} id="link"><span>About</span></Link>
              <Link to="/projects" className={props.projects} onClick={() => props.activate("/projects")} id="link"><span>Projects</span></Link>
              <Link to="/media" className={props.media} onClick={() => props.activate("/media")} id="link"><span>Media</span></Link>
              <Link to="/memes" className={props.memes} onClick={() => props.activate("/memes")} id="link"><span>Memes</span></Link>
            </Nav>
          </Navbar>
        </Container>
      </div>
    )
}


