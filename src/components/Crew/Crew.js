import './Crew.css'

const Crew = (props) => {
  return (
    <div className='crew-items'>
        <img src={`https://image.tmdb.org/t/p/original${props.data.profile_path}`} alt=""/>
        <div className='info'>
            <h4 className='crew-name'>{props.data.name}</h4>
            <h4 className='crew-role'>{props.data.job}</h4>
        </div>
    </div>
  )
}

export default Crew