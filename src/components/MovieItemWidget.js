import React from 'react'
import CrumbWidget from './CrumbWidget'
import MovieItemHeaderWidget from './MovieItemHeaderWidget'
import MovieItemBodyWidget from './MovieItemBodyWidget'
import ReviewListWidget from './ReviewListWidget'
import AddReviewFormWidget from './AddReviewFormWidget'

export default ({
  movie
}) => {
  console.log('movie', movie)

  return (
    <div className="movie-item">
<<<<<<< HEAD
        <CrumbWidget/>
=======
        <CrumbWidget {...movie} />
>>>>>>> 75d6c5b3fffaba0c58e830ba5d82532f3726210b
        <MovieItemHeaderWidget {...movie} />
        <MovieItemBodyWidget {...movie} />
        <ReviewListWidget {...movie} />
        <AddReviewFormWidget {...movie} />
    </div>
  )
}
