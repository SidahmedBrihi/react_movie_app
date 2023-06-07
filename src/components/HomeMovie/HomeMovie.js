import {  useEffect, useState } from "react"
import "./HomeMovie.css"
import React from "react";
import { AiFillStar, AiFillFire , AiFillEye} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';


const HomeMovie = () => {
    const[movie, setMovie] = useState("") ;
    const[categ, setCateg] = useState("") ;
    useEffect(()=> {
        
        fetch(`https://api.themoviedb.org/3/movie/620705?api_key=fb4004e564486b55dac55698ceaa8be4`) 
        .then((val) => {
        return val.json()
        })
        .then(val => {
            setMovie(val)
            setCateg(val.genres)
        })
    },[])
    
        
  return (
    <div className="HomeMovie" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
       <div className="movie-content">
        <h2 className="movie-title">{movie.original_title}</h2>
        <div className="genres">
        {
            Array.from(categ).map((elm,ind) => {
                return <div className="genres-items" key={ind}>{elm.name}</div>
            }) 
        }
        </div>
        <p className="movie-description text-center">{movie.overview}</p>
        <div className="rate d-flex">
            <div className="vote d-flex me-5 ">
                <span><AiFillStar /></span>
                <h2>{movie.vote_average}</h2>
                <p className="ms-3 fs-3">Rating</p>
            </div>
            <div className="popularity d-flex">
                <span><AiFillFire /></span>
                <h2>{movie.popularity}</h2>
                <p className="ms-3 fs-3">popularity</p>
            </div>
        </div>
        <ul className="movie-links">
            <li><a href={`/movie/${movie.id}`} className="view"> <span><AiFillEye /></span> view</a></li>
            <li><a href="#" className="favorite"> <span><MdFavoriteBorder /></span> favorite</a></li>
        </ul>
        </div>
    </div>
  )
}

export default HomeMovie