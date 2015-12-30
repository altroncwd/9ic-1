import React,{Component} from 'react'
import apiTMDB from '../../utils/apiTMDB'
import common from '../../utils/common'

/*==========  NOTE  =========== 
12/30/15 > need to get the genres and posters properly;
*/

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
          const random = _.random(data.results.length-1);
          const posterURL = common.getPosterURLByMovie(data.results[random]);
          this.setState({poster: posterURL});     
          //is there a better way then setting state twice to add two things
          this.setState(data.results[random]);
          // console.log("The current state of affairs : ", this.state);
          // console.log(random, ' : ',data.results[random])
         });
  }


  render(){
    return(
      <div className="Tinder" className="col-md-6 col-md-offset-3 text-center">
        <h3> {this.state.title} </h3>
        <div className="PosterView">
          <button className="btn btn-primary btn-lg col-md-1">Dislike</button>
          <img src={this.state.poster} className='col-md-10'/>
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