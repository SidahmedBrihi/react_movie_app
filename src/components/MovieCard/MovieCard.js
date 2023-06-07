import "./MovieCard.css"
import { AiFillStar, AiFillFire , AiFillEye} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  function addToFavorite() {
    let arr = {
      theId : props.data.id ,
      theType : props.data.media_type ,
    } ;
    if (window.localStorage.getItem("movie") === null) {
      window.localStorage.setItem("movie" , JSON.stringify([arr]))
    }
    else {
      let counter = 0 ;
      let newarr = JSON.parse(localStorage.getItem("movie")) ;
      Array.from(newarr).map((elm ,ind) => {
        if(elm.theId === arr.theId) {
          newarr = newarr.filter((elmnt) => elmnt.theId !== arr.theId) ;
          counter ++
        }
       })
       if (counter === 0) {
        newarr.push(arr) ;
       }
      window.localStorage.setItem("movie" , JSON.stringify(newarr))
    }
    
  }
  
  return (
    <div className="movieCard" >
      <img src={`https://image.tmdb.org/t/p/w780${props.data.poster_path}`} alt="" className="movieCard-poster"/>
      <div className="card-infos text-center">
        <div className="content">
          <p>{props.data.name}</p>
          <div className="rate">
          <span><AiFillStar /></span>
          <p>{props.data.vote_average}</p>
          </div>
          <Link to={props.data.media_type === 'movie' ? `/movie/${props.data.id}`:
           (props.data.media_type === 'tv' ? `/tv/${props.data.id}` : console.log() ) }
            className="view"> <span><AiFillEye /></span> view</Link>
          <br />
          <a href="#//" className="favorite" onClick={addToFavorite}> <span><MdFavoriteBorder /></span> favorite</a>
          
        </div>
      </div>
    </div>
  )
}

export default MovieCard