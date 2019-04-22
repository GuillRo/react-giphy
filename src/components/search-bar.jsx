import React, { Component } from 'react'

class SearchBar extends Component {
  handleUpdate = (event) => {
    // console.log(event.target.value)
    this.props.search(event.target.value)
  }

  componentWillMount() {
    console.log("Search bar will mount")
  }

  componentDidMount() {
    console.log('Search bar has mounted')
  }

  // jamais nécessaire d'updater la search bar vu qu'elle ne change jamais
  shouldComponentUpdate() {
    return false
  }

  render() {
    console.log('Search bar has rendered')
    return (
      <input type='text' className='form-control form-search'
        onChange={this.handleUpdate} />
    )
  }
}

export default SearchBar
