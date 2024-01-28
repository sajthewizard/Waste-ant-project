import React, { createRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { LightBulbIcon , CameraIcon, VideoCameraIcon} from '@heroicons/react/24/solid';
import {createFileName, useScreenshot} from 'use-react-screenshot';
import jig from './VID_20211027_204531.mp4';


export const Videoplayer =()=>{

  // If I get an API I will get the data like URL, Title from the Api. So the code will be retracting from the API. so it will go like this 
  // Const [videoInfo, setVideoInfo]=useState('')

  // useEffect(()=>{
  //   fetch('API')
  //   .then(res=>res.json())
  //   .then(data=>setVideoInfo(data))
  // },[])
  //  I will map through the videoInfo and take the infos required


  //  taking scrrenshot 
  const [time,setTime]=useState("")
 
const ref =createRef(null)

  const [image,takeScreenShot]=useScreenshot(
    {
      type:'image/jpeg',
      quality:1.0
    }
  )
  const handleScreenshot=()=>{
    takeScreenShot(ref.current).then(download);
    setTime(new Date().toLocaleTimeString())

  }
  const download=(image,{name=`${time}`,extension='jpg'}={})=>{
    const a=document.createElement('a')
    a.href=image
    a.download=createFileName(extension,name)
    a.click()

  }

//  Video player
  const [video,setVideo]=useState('');

  const [videoUrl,setVideoUrl]=useState('https://www.youtube.com/watch?v=LXb3EKWsInQ');

  const handleUrlChange=(e)=>{
    setVideo(e.target.value);
  }
  const handleUrlSubmit=(e)=>{
    e.preventDefault();
    const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
    if(youtubeRegex.test(video))
    {
      setUrlError('light')
    }
    else
    {
      setUrlError('futush')
    }
    setVideoUrl(video);
    
  }

  // Error if video not found
  const [urlError,setUrlError]=useState('emni')

  // Taking user permission for saving the image

 const [popup,setPopup]=useState(false);
 const handlePopUp=()=>{
  setPopup(!popup);
 }
 const closePopup=()=>{
  handleScreenshot();
  setPopup(false);
 }


//  Taking data for video recording

 const [view,setView]=useState(false)


 const handleview=()=>{
  setView(true);
  setTime(new Date().toLocaleTimeString())
  // const data={sec,time};
  // fetch('http://localhost:5000/portal',{
  //   method:'POST',
  //   headers:{
  //     'content-type':'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res=>res.json())
  // .then(data=>{
  //   console.log('inside here',data)
  // }
  // )

 }


 const [sec,setSec]=useState('')

 

 const record5sec=()=>{
  setSec('5sec');
  
  setView(false)
  }

 const record10sec=()=>{
  setSec('10sec')
  
  setView(false)
 }

 const record15sec=()=>{
  setSec('15sec')
  
  setView(false)
 }


 
  

  
    return (
            
      
      <div  className='wrapper'> 
      {popup?
      <div className="popup">
       <div>
        
        <h4> Want to save the image</h4>
        <div className="popup-header mx-4">
        <button onClick={closePopup} className="bg-success"> Yes</button>
        <button  onClick={()=>setPopup(false)}className="bg-danger"> No</button>
        
        </div>
       
       
      
        </div>
        

      </div>
       :""}
         {view?
      <div className="popup">

       <div>
        
        <h4> Please set the duration</h4>
        <div className="view-header text-center">
        <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
           <button onClick={()=>record5sec()} type="button" className="btn btn-outline-primary">5 sec</button>
          <button  onClick={record10sec} type="button" className="btn btn-outline-primary">10 sec</button>
           <button  onClick={record15sec} type="button" className="btn btn-outline-primary">15 sec</button>
</div>
     
        
        </div>
       
       
      
        </div>
        

      </div>
      
      :""}

      <div className="rong">
        <h3>Title: {video?video: "Local video"}</h3>
        <LightBulbIcon className={urlError}></LightBulbIcon>
      </div>
     
        <form className='form-group form ' onSubmit={handleUrlSubmit}>
         <input type="text" className="form-control" placeholder="Enter a Youtube URL to see the URL in title / any other URL to check the bulb go red" required onChange={handleUrlChange} />
         <button  type="submit" className="btn btn-success btn-md mx-2" > Watch</button>
        </form>
       <div  ref={ref} className="youtube-box">
        
       {/* <ReactPlayer  url={videoUrl} controls/> */}
       <ReactPlayer  url={jig} controls/>

       
       <div>
         <div className="record">
          
      <CameraIcon className="chobi" onClick={handlePopUp}></CameraIcon>
      
          <VideoCameraIcon className="chobi" onClick={handleview}></VideoCameraIcon>
         
        
         </div>
         <div>
          <p>Duration: {sec}</p>
          <p>Set time: {time}</p>
         </div>
        
       </div>
       <div>
     </div>
       
    </div>
  </div>
    );
  };
  
export default Videoplayer;