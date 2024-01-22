import React from 'react';
import  './Header.css';
import logo from "./ce7c8b6b17fc2673faf988d0b7166feb_t.jpeg";


const Header = () => {
    return (
        <nav  className='header'> 
     <h4>Waste Ante Sample</h4>
     <div>
     <a href="/portal"> Portal</a>
     <a href="/dashboard"> DashBoard</a>
     </div>
            
        </nav>
    );
};

export default Header;