import "./Footer.css"
import { FaInstagramSquare} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import {AiFillGithub } from 'react-icons/ai';



const Footer = () => {
  return (
    <div className="footer">
        <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
        <a href="https://www.facebook.com/"><BsFacebook /></a>
        <a href="https://www.github.com/"><AiFillGithub /></a>
    </div>
  )
}

export default Footer