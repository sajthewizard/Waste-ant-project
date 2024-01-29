import React, { useState } from 'react';
import VideoPlayer from './Component/Videoplayer';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">

      <Header></Header>
      
      <VideoPlayer></VideoPlayer>
      
    </div>
  );
}

export default App;
