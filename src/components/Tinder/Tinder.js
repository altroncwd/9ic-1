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
          console.log(random, ' : ',data.results[random])
         });
  }

  render(){
    return(
      <div className="Tinder" >

        <div className="PosterView" className='col-md-4 col-md-offset-1'>
          <img src={this.state.poster} />
        </div>

        <div className="Description text-left col-md-5 col-md-offset-1">
          <h1>{this.state.title}</h1>
          <div  className="col-md-12">
            <button className="btn btn-primary " >Dislike</button>
            <button className="btn btn-primary " >Like</button>
          </div>

          <div>
            <p> <b>Language : </b>{this.state.original_language}</p>
            <p> <b>Genre : </b>{this.state.genre_ids} </p>
            <p> <b>Descritption : </b>{this.state.overview} </p>
          </div>
        </div>

      </div>
    )
  }

}