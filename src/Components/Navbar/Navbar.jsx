import React, {useState,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>

    
    
    <img src={logo} alt="" className='logo'/>
    <ul>
        <li><Link to = 'hero' smooth = {true} offset={0} duration = {500}>Home</Link></li>
        <li><Link to = 'about' smooth = {true} offset={-260} duration = {500}>About Us</Link></li>
        <li><Link to = 'program' smooth = {true} offset={-260} duration = {500}>Program</Link></li>
        <li><Link to = 'testimonials' smooth = {true} offset={-260} duration = {500}>Testimonials</Link></li>
        <li><Link to = 'contact' smooth = {true} offset={-260} duration = {500}>Campus</Link></li>
        <li><Link className='btn' to = 'contact'smooth ={true} offset={-260} duration={500}>Contact Us</Link></li>
    </ul>
   </nav>
  )
}

export default Navbar
