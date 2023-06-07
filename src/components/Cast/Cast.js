import './Cast.css'

const Cast = (props) => {
  return (
    <div className='cast-items'>
        <img src={`https://image.tmdb.org/t/p/original${props.data.profile_path}`} alt=''/>
        <div className='info'>
            <h4 className='cast-name'>{props.data.name}</h4>
            <h4 className='cast-role'>As {props.data.character}</h4>
        </div>
    </div>
  )
}

export default Cast