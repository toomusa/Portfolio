import React, { Component } from "react";
import ReactPlayer from 'react-player';
import Lightbox from "react-image-lightbox";
import { videos, files, gallery } from "../components/Gallery";
import "react-image-lightbox/style.css";

export default class Media extends Component {

  state = {
    videos: [],
    files: {},
    gallery: {},
    photoIndex: 0,
    isOpen: false
  }

  componentWillMount() {
    this.setState({ videos, files, gallery })
  }
  
  componentDidMount() {
    console.log(this.state)
  }

  render() {
    const { photoIndex, isOpen, gallery, videos } = this.state;
    return (

      <div className="container" id="media">
        <div><h5 id="videoTitle">Media</h5></div>
          <div className="row">
              
              <div className="col-md-6 col-sm-12 col-xs-12 topDiv">
                <div className="videoDiv">
                  <div className="mediaTitle">
                    <p>{videos[0].title}</p>
                  </div>
                  <div className="playerDiv">
                    <ReactPlayer 
                      url={videos[0].src} 
                      id={videos[0].id} 
                      alt="video" 
                      className="video" 
                      width="100%"
                      height="200px"
                      config={{youtube: {playerVars: { modestbranding: 1 }}}}
                      controls 
                    />
                  </div>
                  <div className="spacerDiv"></div>
                  <div className="captionDiv">
                    <p>{videos[0].caption}</p>
                  </div>
                </div>
              </div>



              <div className="col-md-6 col-sm-12 col-xs-12 topDiv">
              <div className="galleryDiv">
                <div className="galleryTitle">
                  <p>{this.state.gallery.title}</p>
                </div>
                <div className="galleryBody">
                  <img 
                    src={this.state.gallery.image} 
                    id={this.state.gallery.id} 
                    alt="Cloud Review" 
                    className="cloudReview" 
                    onClick={() => this.setState({ isOpen: true })}/>
                  <div>
                    {isOpen && (
                      <Lightbox
                        id="galleryBox"
                        mainSrc={gallery.slides[photoIndex]}
                        nextSrc={gallery.slides[(photoIndex + 1) % gallery.slides.length]}
                        prevSrc={gallery.slides[(photoIndex + gallery.slides.length - 1) % gallery.slides.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + gallery.slides.length - 1) % gallery.slides.length
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex: (photoIndex + 1) % gallery.slides.length
                          })
                        }
                      />
                    )}
                  </div>
                <div className="galleryCaption">
                  <p>{this.state.gallery.caption}</p>
                </div>
              </div>
            </div>
            </div>

            <div className="col-md-6 col-sm-12 col-xs-12 topDiv">
              <div className="filesDiv">
                <div className="filesTitle">
                  <p>{this.state.files.title}</p>
                </div>
                <div className="filesBody">
                  <a href={this.state.files.src} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={this.state.files.image} 
                      id={this.state.files.id} 
                      alt="A Framework for Sustainability" 
                      className="sustainability"/>
                    </a>
                  <div>
                  </div>
                <div className="filesCaption">
                  <p>{this.state.files.caption}</p>
                </div>
              </div>
            </div>
            </div>

            
            <div className="col-md-6 col-sm-12 col-xs-12 topDiv">
                <div className="videoDiv">
                  <div className="mediaTitle">
                    <p>{videos[1].title}</p>
                  </div>
                  <div className="playerDiv">
                    <ReactPlayer 
                      url={videos[1].src} 
                      id={videos[1].id} 
                      alt="video" 
                      className="video" 
                      width="100%"
                      height="200px"
                      config={{youtube: {playerVars: { modestbranding: 1 }}}}
                      controls 
                    />
                  </div>
                  <div className="spacerDiv"></div>
                  <div className="captionDiv">
                    <p>{videos[1].caption}</p>
                  </div>
                </div>
              </div>

          </div>
        </div>
    );
  }
}

