import './MovieDetails.css'
import { AiFillStar, AiFillFire } from 'react-icons/ai';
import {useState} from "react" ;
import { useParams } from 'react-router-dom'
import {Cast, Crew} from "../../components/index"


const MovieDetails = () => {
    const[movie, setMovie] = useState('') ;
    const[categ, setCateg] = useState('') ;
    const[cast, setCast] = useState('') ;
    const[crew, setCrew] = useState('') ;
    const {movieId} = useParams() ;
    // get movie data
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=fb4004e564486b55dac55698ceaa8be4&language=en-US`)
    .then(val => val.json() )
    .then(val => {
        setMovie(val)
        setCateg(val.genres)
    })
    // get movie cast and crew
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fb4004e564486b55dac55698ceaa8be4&language=en-US`)
    .then(val => val.json() )
    .then(val => {
        setCast(Array.from(val.cast).slice(0,10))
        setCrew(Array.from(val.crew).slice(0,10))
    })

  return (
    <div className='moviedetails'  >
        <div className='movier-header' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,}}>
        <div className='content container'>
            <div className='image'>
                <img className='img-fluid' src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt='' />
            </div>
            <div className='movie-info'>
                <h1 className='movie-title'>{movie.name}</h1>
                <p className='movie-year'>{movie.release_date}    -    <span className='movie-dur'>{movie.runtime} min</span></p>
                <div className="genres">
                    {
                        Array.from(categ).map((elm,ind) => {
                        return <div className="genres-items" key={ind}>{elm.name}</div>
                        }) 
                    }
                </div>
               
                <p className='description'>{movie.overview}</p>
                <div className="rate d-flex">
                    <div className="vote d-flex me-4 ">
                        <span><AiFillStar /></span>
                        <h2>{movie.vote_average}</h2>
                        <p className="ms-1 fs-3">Rating</p>
                    </div>
                    <div className="popularity d-flex">
                        <span><AiFillFire /></span>
                        <h2>{movie.popularity}</h2>
                        <p className="ms-1 fs-3">popularity</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='movie-credit container'>
            <div className='movie-cast'>
                <h3 className='title'>Cast</h3>
                <div className='content'>
                {Array.from(cast).map((elm, ind)=> {
                    return <Cast data={elm} key={ind} />
                    })}
                </div>
            </div>
            <div className='movie-crew'>
                <h3 className='title'>Crew</h3>
                <div className='content'>
                {Array.from(crew).map((elm, ind)=> {
                    return <Crew data={elm} key={ind} />
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails