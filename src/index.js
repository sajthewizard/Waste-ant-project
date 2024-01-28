import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Home from './Component/Layout/Home';
import Firstpage from './Component/Firstpage/Firstpage';
import Videoplayer from './Component/Videoplayer';
import Dashboard from './Component/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Firstpage></Firstpage>
      },
      {
        path:'portal',
        element:<Videoplayer></Videoplayer>
      }
      ,
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      },
      
      {
        path:'*',
        element:<div className='text-center'><h1>Error Loading page 4444444!!!!! </h1></div>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
