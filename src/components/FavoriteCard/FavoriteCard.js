import './FavoriteCard.css'
import { useState } from 'react';
import { AiFillStar,  AiFillEye} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';


const FavoriteCard = (props) => {
    const[movie, setMovie] = useState('') ;
    if (props.data.theType === "movie") {
        // get movie data
    fetch(`https://api.themoviedb.org/3/movie/${props.data.theId}?api_key=fb4004e564486b55dac55698ceaa8be4&language=en-US`)
    .then(val => val.json() )
    .then(val => {
        setMovie(val)
    })
    }
    else {
        // get tvShow data
    fetch(`https://api.themoviedb.org/3/tv/${props.data.theId}?api_key=fb4004e564486b55dac55698ceaa8be4&language=en-US`)
    .then(val => val.json() )
    .then(val => {
        setMovie(val)
    })
    }
    // function addToFavorite()
    function addToFavorite() {
        let arr = {
          theId : movie.id ,
          theType : movie.media_type ,
        } ;
        if (window.localStorage.getItem("movie") === null) {
          window.localStorage.setItem("movie" , JSON.stringify([arr]))
        }
        else {
          let counter = 0 ;
          let newarr = JSON.parse(localStorage.getItem("movie")) ;
          Array.from(newarr).map( (elm)=> {
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
        window.location.reload() ;
      }
  return (
    <div className='favorite-card'>
        <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt=''/>
        <div className="card-infos text-center">
        <div className="content">
          <p>{movie.name}</p>
          <div className="rate">
          <span><AiFillStar /></span>
          <p>{movie.vote_average}</p>
          </div>
          <Link to={props.data.theType === 'movie' ? `/movie/${movie.id}`:
           (props.data.theType === 'tv' ? `/tv/${movie.id}` : console.log() ) }
            className="view" id={movie.id} ><span><AiFillEye /></span> view </Link>
          <br />
          <a href="#hh" className="favorite" onClick={addToFavorite}> <span><MdFavoriteBorder /></span> favorite</a>
        </div>
      </div>
    </div>
  )
}

export default FavoriteCard