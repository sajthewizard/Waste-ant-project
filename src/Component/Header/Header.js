import React from 'react';
import  './Header.css';
import logo from "./ce7c8b6b17fc2673faf988d0b7166feb_t.jpeg";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav  className='header'> 
     <h4>Waste Ant Sample</h4>
     <div>
     <Link to="/portal"> Portal</Link>
     <Link to="/dashboard"> DashBoard</Link>
     </div> 
            
        </nav>
    );
};

export default Header;