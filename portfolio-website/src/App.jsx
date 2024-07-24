import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Header from './components/header/Header'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App