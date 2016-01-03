import React from 'react'
import { saveMovieData } from '../helpers/firebaseHelpers'

export default ({title, popularity, overview, poster_path, id}) => {
  let saveData = (preference) => {
    return () => saveMovieData({ title, popularity, overview, poster_path, id }, preference)
  }
  return (
   <div className="like-buttons">
    <a href="#" onClick={saveData('like')} className="btn btn-success">Like</a>
       <a href="#" onClick={saveData('dislike')} className="btn btn-danger">Dislike</a>
   </div>
  )
}
