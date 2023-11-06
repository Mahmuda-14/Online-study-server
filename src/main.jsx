import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './Components/Router';
import AuthProvider from './Components/Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-[1400px] mx-auto'> 
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
  </div>
)
