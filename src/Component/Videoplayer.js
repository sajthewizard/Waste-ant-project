import React, { createRef, useState } from "react";
import ReactPlayer from "react-player";
import { LightBulbIcon , CameraIcon, VideoCameraIcon} from '@heroicons/react/24/solid';
import {createFileName, useScreenshot} from 'use-react-screenshot';
import jig from './VID_20211027_204531.mp4'




export const Videoplayer =()=>{
 

const ref =createRef(null)
//  taking scrrenshot
  const [image,takeScreenShot]=useScreenshot(
    {
      type:'image/jpeg',
      quality:1.0
    }
  )
  const handleScreenshot=()=>{
    takeScreenShot(ref.current).then(download)

  }
  const download=(image,{name='img',extension='jpg'}={})=>{
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

      <div className="rong">
        <h3>Title:{video}</h3>
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
          
      <CameraIcon onClick={handlePopUp}></CameraIcon>
          <VideoCameraIcon></VideoCameraIcon>
         
        
         </div>
        <div>

        </div>
       </div>
       <div></div>

       </div>
       </div>
    );
  };
  
export default Videoplayer;