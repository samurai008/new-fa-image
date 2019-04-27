import React, { Component } from 'react';

export default class Thumbnail extends Component {
  render() {
    console.log(this.props.active);

    const style = {
      width: '10%',
      height: '10%'
    };

    return (
      <div style={{ display: 'inline' }} onClick={this.props.click}>
        <img src={this.props.src} style={style} id={this.props.id} />
      </div>
    );
  }
}
