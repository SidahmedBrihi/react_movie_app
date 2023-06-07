import "./Favorite.css"
import {FavoriteCard} from "../../components/index"

const Favorite = () => {
    let movie ;
    if (window.localStorage.getItem("movie")) {
         movie= JSON.parse(window.localStorage.getItem("movie"))
    }
  return (
    <div className="favorite">
        <div className="container">
            <h2 className="favorite-title">My Favorite <span className="empty"></span> </h2>
            <div className="favorite-content">
                {
                    movie.map((elm) => {
                    return <FavoriteCard data={elm}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Favorite