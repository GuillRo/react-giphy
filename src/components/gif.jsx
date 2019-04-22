import React, { Component } from 'react'

class Gif extends Component {
  handleHover = (event) => {
    const { mouse, id } = this.props
    if (mouse) { mouse(id) }
  }

  // update uniquement si nécessaire
  // ne render pas le gif à nouveau si l'id ne change pas
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id
  }

  render() {
    console.log('Gif has rendered' + this.props.id)
    const { id } = this.props
    if (!id) {
      return null
    }
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} alt='' className='gif' onMouseEnter={this.handleHover} />
    )
  }
}

export default Gif
