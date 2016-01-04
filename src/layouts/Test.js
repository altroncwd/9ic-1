import React from 'react'
import apiTMDB from '../helpers/apiTMDB'
import View from '../components/MovieItemBodyWidget'

const newMovie = () => {
  apiTMDB.getRandomMovie()
}


export default () => {
// i need to make a blanke state, so the rest wont render
// then when the function is called, it needs to replace the state and update the view
 

  return (
    <div className="text-center">
      <h2> Find a Movie </h2>
      <p> Not sure what to watch, let us help you with that </p>
      <button onClick={newMovie} >Find a new movie</button>
      <p> Movie View Here : make the custome tag or use the pre made ones...</p>
    </div>
    

    

  )
}