import {  useState } from 'react'
import './Search.css'
import {SearchCard} from '../../components/index'
import { useParams } from 'react-router-dom'



const Search = (props) => {
    const[movieOrTv , setMovieOrTv] = useState("") ;
    const {name} = useParams();
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=fb4004e564486b55dac55698ceaa8be4&query=${name}`) 
    .then((val) => {
        return val.json()
    })
    .then(val => {
        setMovieOrTv(val.results)
    })
    
  return (
    <div className='search ' >
        <h2 className='search-result'>Search results for <span>{name}</span></h2>
        <div className='search-movies'>
            {
            Array.from(movieOrTv).map((movie)=> {
                return <SearchCard data={movie} />
            })
            }
            
        </div>
    </div>
    
  )
}

export default Search