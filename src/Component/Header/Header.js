import React from 'react';
import  './Header.css';

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav  className='header'> 
     <h4>WasteAnt Sample</h4>
     <div>
        <Link to="/">Home</Link>
     <Link to="/portal"> Portal</Link>
     <Link to="/dashboard"> Dashboard</Link>
     </div> 
            
        </nav>
    );
};

export default Header;