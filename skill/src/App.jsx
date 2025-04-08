import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'

// import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Layout';
// import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import Dashboard from './Components/Dashboard/Dashboard';
import About from './Components/About/About';
import Login from './Components/login/Login';
import Technology from './Components/Courses/Technology';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='courses' element={<Courses/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='about' element={<About/>} />
      <Route path='courses' element={<Technology/>} />
      
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

function App() {
  return (
    <>

    </>
  )
}

export default App

