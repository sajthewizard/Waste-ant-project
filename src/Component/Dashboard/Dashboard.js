import React, { useEffect, useState } from 'react';
import "./Dashboard.css"

const Dashboard = () => {
    const [datas,setDatas]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/portal')
        .then(res=>res.json())
        .then(datas=>setDatas(datas))
    },[])

    return (
        <div className='text-center'>
           {
            datas.map(data=> <div className='datas'> 
            <h5>The data requested</h5>
                <p>Duration : {data.sec}</p>
                <p>Time : {data.set_time}</p>
            </div> )
           }
    
  </div>
    );
};

export default Dashboard;