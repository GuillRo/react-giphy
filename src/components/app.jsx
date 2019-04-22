import React, { Component } from 'react'
import giphy from 'giphy-api'

import SearchBar from './search-bar'
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

const KEY = 'uPS2WkBxwsKfXKsi5diHOcw3degSH0R0'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifId: 'pZwQz0w8bYcZW'
    }

    // this.search('Homer thinking')
  }

  setSelected = (gifId) => {
    this.setState({ selectedGifId: gifId })
  }

  search = (query) => {
    giphy(`${KEY}`).search(query).then((res) => {
      // Res contains gif data!
      console.log(res)

      this.setState({
        gifs: res.data
      })
    }).catch((e) => {
      throw new Error(e)
    })
  }
  render() {
    return (<div>
      <div className='left-scene'>
        <SearchBar search={this.search} />
        <div className='selected-gif'>
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className='right-scene'>
        <GifList gifs={this.state.gifs} mouse={this.setSelected} />
      </div>
    </div>)
  }
}

export default App
