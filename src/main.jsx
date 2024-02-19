import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import SearchByName from './App.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
   </HelmetProvider>
  </React.StrictMode>,
)
