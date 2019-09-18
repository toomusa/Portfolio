import React, { Component } from "react";
import MemeFiles from "../components/MemeFiles";
import ReactPlayer from 'react-player';
import { Modal } from 'react-bootstrap';


export default class Memes extends Component {

  state = {
    memes: [],
  }

  componentDidMount() {
    this.setState({
      memes: MemeFiles
    })
  }

  toggleModal = (src) => {
    let meme = this.state.memes.filter(meme => meme.src === src)
    meme[0].modal = !meme[0].modal;
    this.setState({})
  }

  render() {
    return (
      <div className="container" id="memesDiv">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div><h5 id="memeTitle">Memes for Developers</h5></div>
            {this.state.memes.map((meme, index) => (
              meme.type === "video"
              ? 
              <div key={index}>
                <ReactPlayer url={meme.src} id={meme.id} alt="meme" className="meme" onClick={() => this.toggleModal(meme.src)}/>
                <Modal size="lg" show={meme.modal} onHide={() => this.toggleModal(meme.src)}>
                  <ReactPlayer url={meme.src} id={meme.id} alt="meme" className="modalMeme" playing loop controls />
                </Modal>
              </div>
              :
              <div key={index}>
                <img src={meme.src} id={meme.id} alt="meme" className="meme" onClick={() => this.toggleModal(meme.src)}/>
                <Modal size="lg" show={meme.modal} onHide={() => this.toggleModal(meme.src)}>
                  <img src={meme.src} id={meme.id} alt="meme" className="modalMeme" onClick={() => this.toggleModal(meme.src)} />
                </Modal>
              </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

