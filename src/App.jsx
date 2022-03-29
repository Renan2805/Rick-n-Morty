import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import NavBar from './Components/nav-bar'
import Home from './Components/home'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/characters' element={(<><h1>lol</h1></>)}/>
      </Routes>
    </Router>
  )
}

export default App
