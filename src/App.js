import React from 'react';
import logo from './logo.svg';
import './App.css';
import img1 from './assets/_MG_9387.JPG';
import img2 from './assets/_MG_9358.JPG';
import img3 from './assets/_MG_9339.JPG';
import Thumbnail from './Thumbnail';
import ProjectImage from './ProjectImage';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mainImg: img1
    };
  }

  changeMainImg(e) {
    console.log(e.target.src);
    this.setState({
      mainImg: e.target.src,
      active: e.target.id
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <ProjectImage src={this.state.mainImg} />
        <Thumbnail
          src={img1}
          id="1"
          click={this.changeMainImg.bind(this)}
          active={this.state.active}
        />
        <Thumbnail
          src={img2}
          id="2"
          click={this.changeMainImg.bind(this)}
          active={this.state.active}
        />
        <Thumbnail
          src={img3}
          id="3"
          click={this.changeMainImg.bind(this)}
          active={this.state.active}
        />
      </div>
    );
  }
}
