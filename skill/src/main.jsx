
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'

import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Login from './Components/login/Login';
import Sign_in from './Components/Sign_in/Sign_in';
import Technology from './Components/Courses/Technology';
import Halthcare from './Components/Courses/Halthcare.jsx';
import Agriculture from './Components/Courses/Agriculture.jsx';

// import Login from './Components/login/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='courses' element={<Courses/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='about' element={<About/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Sign_in />} />
      <Route path='technology' element={<Technology/>} />
      <Route path='halthcare' element={<Halthcare/>} />
      <Route path='agriculture' element={<Agriculture/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
