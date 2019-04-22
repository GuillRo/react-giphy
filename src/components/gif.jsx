import React, { Component } from 'react'

class Gif extends Component {
  handleHover = (event) => {
    this.props.mouse(this.props.id)
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt='' className='gif' onMouseEnter={this.handleHover} />
    )
  }
}

export default Gif
