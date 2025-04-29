import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Layout/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';

const router=createBrowserRouter([
  {
   path:'/',
   Component:Root,
   children:[
    {
      path:'/',
      Component:Home
    },
    {
      path:'/login',
      Component:Login
    },
    {
      path:'/signup',
      Component:Signup
    }
   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
