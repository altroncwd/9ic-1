import React,{Component} from 'react'

/*==========  NOTE  =========== 
12/29/15 > tempData is a placeholder untill I can call on the actual DB
*/

const tempData= {
  title: "Lego Batman Movie",
  genre: ['Animation', 'Action', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
  summary: "Its the lego movie what more can I say about how great the movie is.",
  rating: 'PG',
  cover: 'http://cdn.wegotthiscovered.com/wp-content/uploads/lego-will-arnett-batman-600.jpg'
}

export default class Tinder extends Component {
  render(){
    return(
      <div className="Tinder" className="col-md-6 col-md-offset-3 text-center">
        <h3> {tempData.title} </h3>
        <div className="PosterView">
          <button className="btn btn-primary btn-lg col-md-1">Dislike</button>
          <img src={tempData.cover} className='col-md-10'/>
          <button className="btn btn-primary btn-lg col-md-1" >Like</button>
        </div>

        <div className="Description">
          <div className="Description">
          <p> Genre : {tempData.genre.join(', ')} </p>
          <p> Descritption : {tempData.summary} </p>
        </div>
        </div>
      </div>
    )
  }

}