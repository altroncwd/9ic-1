import React from 'react'
import apiTMDB from '../helpers/apiTMDB'
import MovieView from '../components/MovieItemHeaderWidget'
import MovieDescription from '../components/MovieItemBodyWidget'

const newMovie = () => {
  temp = apiTMDB.getRandomMovie()
}

let temp = {}

export default () => {
// i need to make a blanke state, so the rest wont render
// then when the function is called, it needs to replace the state and update the view

  return (
    <div className="text-center">
      <h2> Find a Movie </h2>
      <p> Not sure what to watch, let us help you with that </p>
      <button onClick={newMovie} >Find a new movie</button>
      <MovieView {...temp} />
      <MovieDescription {...temp} />
    </div>

  )
}