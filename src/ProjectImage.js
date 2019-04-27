import React, { Component } from 'react';

export default class ProjectImage extends Component {
  render() {
    const style = {
      width: '30%',
      height: '30%',
      borderBottom: '1px solid lightgrey',
      paddingBottom: '2rem',
      marginBottom: '2rem'
    };

    return (
      <div style={{}}>
        <img src={this.props.src} style={style} />
      </div>
    );
  }
}
