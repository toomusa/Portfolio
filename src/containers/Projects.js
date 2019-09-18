import React from "react";
import NotYet from "../assets/images/ProjectImage.png"
import DBZ from "../assets/images/DBZ.png"
import MissTranslations from "../assets/images/MissTranslations.png"
import Scraper from "../assets/images/Scraper.png"
import Trivia from "../assets/images/Trivia.png"
import WordGuess from "../assets/images/WordGuess.png"
import MemoryGame from "../assets/images/MemoryGame.png"

export default function Projecs() {
  return (
    <div className="container" id="projecs">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div id="projectContainer">
            <h5 id="projectTitle">Projects</h5>
            <div className="container">
              
              <div id="projectDiv">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3" id="projectImageDiv">
                    <h3>NotYet</h3>
                    <img src={NotYet} alt="NotYet" id="projectImage"></img>
                  </div>
                  <div className="col-md-5 col-sm-5 col-xs-5" id="projectDetails">
                      <div className="projectList">
                        <strong>Description: </strong><br></br>
                        <span>A chat application for movie and TV show enthusiasts. This app prevents spoilers by hiding your group conversations 
                          until you mark it watched. Then you can catch up on all the whole 
                          conversation without having your viewer experience spoiled.</span>
                      </div>
                      <div className="projectList">
                        <strong>How It Works: </strong>
                        <span>When you create a channel, you can choose which movie or TV show 
                          will be the primary topic. When the movie is released or the show is aired, 
                          the app will automatically mute that channel for you. Once you've seen it, 
                          you can mark it watched and continue the conversation with your friends.</span>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4" id="projectMeta">
                      <div className="projectList">
                        <strong>Status: </strong>
                        <span>In Development</span>
                      </div>
                      <div className="projectList">
                        <strong>Website: </strong>
                        <span><a href="https://musa-notyet.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      </div>
                      <div className="projectList">
                        <strong>Repo: </strong>
                        <span><a href="https://github.com/toomusa/NotYet/" target="_blank" rel="noopener noreferrer">Github</a></span>
                      </div>
                      <div className="projectList">
                        <strong>View Code: </strong>
                        <span><a href="https://codesandbox.io/s/github/toomusa/NotYet/" target="_blank" rel="noopener noreferrer">CodeSandbox</a></span>
                      </div>
                      <div className="projectList">
                        <strong>Stack: </strong>
                        <span>Mongo, Express, React, Node (MERN)</span>
                      </div>
                      <div className="projectList">
                        <strong>Libraries: </strong>
                        <span>Redux, Redux-Form, Redux-Thunk, Socket.io, Mongoose, 
                          Validator, Passport, Bcrypt, Moment, ReactStrap, and more
                        </span>
                      </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 id="projectExtraTitle">Bootcamp Projects</h5>
              </div>

              <div className="row">

                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div id="projectExtraDiv">
                    <h3>Miss Translations</h3>
                    <img src={MissTranslations} alt="Miss Translations" id="projectExtraImage"></img>
                    <div className="projectExtraList">
                      <strong>Website: </strong>
                      <span><a href="https://toomusa.github.io/Miss-Translations/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      <br></br>
                      <strong>Repo: </strong>
                      <span><a href="https://github.com/toomusa/Miss-Translations" target="_blank" rel="noopener noreferrer">Github</a></span>
                      <br></br>
                      <strong>Stack: </strong>
                      <span>jQuery, HTML/CSS</span>
                      <br></br>
                      <span className="listSpacer"></span>
                      <strong>Description: </strong><br></br>
                      <span>A fun trolling app that mistranslates user input by replacing nouns and adjectives with their antonyms.</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div id="projectExtraDiv">
                  <h3>Memory Game</h3>
                    <img src={MemoryGame} alt="Memory Game" id="projectExtraImage"></img>
                    <div className="projectExtraList">
                      <strong>Website: </strong>
                      <span><a href="https://musa-memory-game.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      <br></br>
                      <strong>Repo: </strong>
                      <span><a href="https://github.com/toomusa/Clicky-Game" target="_blank" rel="noopener noreferrer">Github</a></span>
                      <br></br>
                      <strong>Stack: </strong>
                      <span>Javascript, React</span>
                      <br></br>
                      <span className="listSpacer"></span>
                      <strong>Description: </strong><br></br>
                      <span>A simple memory matching game that shows 12 images and shuffles them after each click.</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div id="projectExtraDiv">
                  <h3>Web Scraper</h3>
                    <img src={Scraper} alt="Web Scraper" id="projectExtraImage"></img>
                    <div className="projectExtraList">
                      <strong>Website: </strong>
                      <span><a href="https://musa-scraper.herokuapp.com/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      <br></br>
                      <strong>Repo: </strong>
                      <span><a href="https://github.com/toomusa/Scraper" target="_blank" rel="noopener noreferrer">Github</a></span>
                      <br></br>
                      <strong>Stack: </strong>
                      <span>jQuery, Mongo, Handlebars</span>
                      <br></br>
                      <span className="listSpacer"></span>
                      <strong>Description: </strong><br></br>
                      <span>A web scraper that grabs events in Berkeley and gives user the ability to save events and add notes.</span>
                  </div>
                  </div>
                </div>

              </div>

              <div className="row">

                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div id="projectExtraDiv">
                  <h3>DBZ RPG Game</h3>
                    <img src={DBZ} alt="DBZ RPG Game" id="projectExtraImage"></img>
                    <div className="projectExtraList">
                      <strong>Website: </strong>
                      <span><a href="https://toomusa.github.io/DBZ-Game/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      <br></br>
                      <strong>Repo: </strong>
                      <span><a href="https://github.com/toomusa/DBZ-Game" target="_blank" rel="noopener noreferrer">Github</a></span>
                      <br></br>
                      <strong>Stack: </strong>
                      <span>jQuery, HTML/CSS</span>
                      <br></br>
                      <span className="listSpacer"></span>
                      <strong>Description: </strong><br></br>
                      <span>A turn-based fighting game with 5 unique characters and randomized attack and counter-attack powers.</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div id="projectExtraDiv">
                    <h3>Word Guess Game</h3>
                    <img src={WordGuess} alt="Word Guess Game" id="projectExtraImage"></img>
                    <div className="projectExtraList">
                      <strong>Website: </strong>
                      <span><a href="https://toomusa.github.io/Word-Guess-Game/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      <br></br>
                      <strong>Repo: </strong>
                      <span><a href="https://github.com/toomusa/Word-Guess-Game" target="_blank" rel="noopener noreferrer">Github</a></span>
                      <br></br>
                      <strong>Stack: </strong>
                      <span>jQuery, HTML/CSS</span>
                      <br></br>
                      <span className="listSpacer"></span>
                      <strong>Description: </strong><br></br>
                      <span>A hangman-style word guessing game that randomizes questions from 3 categories.</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div id="projectExtraDiv">
                  <h3>Trivia Game</h3>
                    <img src={Trivia} alt="Trivia Game" id="projectExtraImage"></img>
                    <div className="projectExtraList">
                      <strong>Website: </strong>
                      <span><a href="https://toomusa.github.io/Trivia-Game/" target="_blank" rel="noopener noreferrer">Heroku</a></span>
                      <br></br>
                      <strong>Repo: </strong>
                      <span><a href="https://github.com/toomusa/Trivia-Game" target="_blank" rel="noopener noreferrer">Github</a></span>
                      <br></br>
                      <strong>Stack: </strong>
                      <span>jQuery, HTML/CSS</span>
                      <br></br>
                      <span className="listSpacer"></span>
                      <strong>Description: </strong><br></br>
                      <span>A trivia game that gives 3 category and difficulty options and displays a Gif based on the correct answer.</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
