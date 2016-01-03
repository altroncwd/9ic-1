import React from 'react'
import { saveMovieData } from '../helpers/firebaseHelpers'

export default ({title, popularity, overview, poster_path, id}) => {
  return (
   <div className="like-buttons">
    <a href="#" onClick= { () => {
      saveMovieData(title, popularity, overview, poster_path, id)
    }
    } className="btn btn-success">Like</a>
       <a href="#" className="btn btn-danger">Dislike</a>
   </div>
  )
}
