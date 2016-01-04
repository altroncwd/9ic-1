import React from 'react'
import apiTMDB from '../helpers/apiTMDB'
import MovieView from '../components/MovieItemHeaderWidget'
import MovieDescription from '../components/MovieItemBodyWidget'


//NOTE: because of the api calls, it takes a few seconds for them to all run
export default () => {
  // i need to make a blanke state, so the rest wont render
  // then when the function is called, it needs to replace the state and update the view

  const newMovie = () => {
    apiTMDB.getRandomMovie((item) => {
      temp = item
      setTimeout(() => {
        console.log("temp set to : ", temp)
      }, 500)
    })
  }

  let temp = {}
  newMovie()

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