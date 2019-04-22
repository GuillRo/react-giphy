import React, { Component } from 'react'
import Gif from './gif.jsx'

const GifList = ({ gifs, mouse }) => {
  return (
    <div className='gif-list'>
      {gifs.map(({ id }) => <Gif id={id} key={id} mouse={mouse} />)}
    </div>
  )
}

export default GifList
