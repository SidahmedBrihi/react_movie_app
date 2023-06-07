import "./Header.css"
import {Container} from '../../components/index'
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";



const Header = () => {

  function clicked1 (e)  {
    e.preventDefault() ;
    if (document.querySelector(".main-search .text").value !== "") {
      let val = document.querySelector(".main-search .text").value ;
      window.open(`/search/${val}`,"_self")
    }
  }
  function clicked2 (e)  {
    e.preventDefault() ;
    if (document.querySelector(".links-form .search").value !== "") {
      let val = document.querySelector(".links-form .search").value ;
      window.open(`/search/${val}`,"_self")
    }
  }
  return (
    <div className="navbar ">
      {window.onscroll = ()=> {
        if(window.scrollY > 100 ) {
          document.querySelector(".navbar").classList.add("active") ;
        }
        else {
          document.querySelector(".navbar").classList.remove("active") ;
        }
      }}
     <Container>
        <Link to='/home' className="logo">
            <h2 className="logo-text">Chaiba Tv</h2>
        </Link>
        <form className="main-search" onSubmit={clicked1}>
            <input type="text" className="text" placeholder="search..."></input>
            <button><BiSearchAlt2 /></button>
        </form>
        <ul className="navbar-links">
            <li id="8" className="list-items"><Link to="/home" >Home</Link></li>
            <li id="2" className="list-items"><Link to="/movie/238">Top Rated</Link></li>
            <li id="3" className="list-items"><Link to="/favorite">Favorite</Link></li>
            <li id="4" className="list-items"><Link to="/contact">Contact</Link></li>
            <span className="close-btn" onClick={()=> {
              document.querySelector(".navbar-links").classList.remove('active') ;
            }}><AiOutlineClose></AiOutlineClose></span>
            <form className="links-form" onSubmit={clicked2} >
            <input type="text" className="search" placeholder="search..."></input>
            <button className="search-btn" ><BiSearchAlt2 /></button>
            </form>
  
        </ul>
        <div className="navbar-btn" onClick={()=> {
          document.querySelector(".navbar-links").classList.add("active") ;
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
     </Container>
    </div>
  )
  
}
export default Header