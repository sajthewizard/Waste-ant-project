import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./Home.css"


const Home = () => {
    return (
        <div className='page-container'>
            <div className="content-wrap">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;