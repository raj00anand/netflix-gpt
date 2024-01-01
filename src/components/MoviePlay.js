import React from 'react'
import Header from './Header'

const MoviePlay = () => {
  return (
    <div>
    <Header/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sSKhdZ32YpY?si=cY-AvLnxqyytdE87" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default MoviePlay
