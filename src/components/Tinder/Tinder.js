import React,{Component} from 'react'
import apiTMDB from '../../utils/apiTMDB'

/*==========  NOTE  =========== 
12/30/15 > tempData is a placeholder untill I can call on the actual DB
12/30/15 > need to get access to the api to grab a random movie;
*/

const tempData= {
  title: "Lego Batman Movie",
  genre: ['Animation', 'Action', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
  summary: "Its the lego movie what more can I say about how great the movie is.",
  rating: 'PG',
  cover: 'http://cdn.wegotthiscovered.com/wp-content/uploads/lego-will-arnett-batman-600.jpg'
}

console.log("testing out an api call");
apiTMDB.getMovies()



export default class Tinder extends Component {
  constructor(props) {
    super(props); 
    this.state = {}

  }

  componentDidMount(){
    this.init();
  }

  init() {
    apiTMDB.getMovies()
      .then((data)=> {
          const random = Math.round(Math.random()*20);
          this.setState(data.results[random]);
          console.log(random, ' : ',data.results[random])
         });
  }


  render(){
    return(
      <div className="Tinder" className="col-md-6 col-md-offset-3 text-center">
        <h3> {this.state.title} </h3>
        <div className="PosterView">
          <button className="btn btn-primary btn-lg col-md-1">Dislike</button>
          <img src={this.state.poster_path} className='col-md-10'/>
          <button className="btn btn-primary btn-lg col-md-1" >Like</button>
        </div>

        <div className="Description">
          <div className="Description">
          <p> Language : {this.state.original_language}</p>
          <p> Genre : {this.state.genre_ids} </p>
          <p> Descritption : {this.state.overview} </p>
        </div>
        </div>
      </div>
    )
  }

}