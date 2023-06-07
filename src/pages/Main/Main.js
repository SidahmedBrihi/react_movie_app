import './Main.css'
import {HomeMovie, MoviesSwiper} from '../../components/index' ;
import { useEffect, useState } from 'react';




const Main = () => {
  const [movieTrend ,  setmovieTrend] = useState("")
  const [tvtrend , setmovieTopRad] = useState("")
  
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=fb4004e564486b55dac55698ceaa8be4&language=en-US')
      .then(val => val.json())
      .then(val => {
      setmovieTrend(val.results)
    }) 
  
    fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=fb4004e564486b55dac55698ceaa8be4&language=en-US')
        .then(val => val.json())
        .then(val => {
        setmovieTopRad(val.results)

    })  
           
      return (
    <div className='main'>
      <HomeMovie />
      <MoviesSwiper title="most popular movies" list={movieTrend}  />
      <MoviesSwiper title="Top popular TvShow"    list={tvtrend}  />
    </div>
  )
}

export default Main