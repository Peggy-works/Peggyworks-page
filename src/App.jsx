import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Navbar from './components/Navbar.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return ( 
    <Router>
      {/*<HeroNavbar/>*/}
      {/*<Navbar/>*/}
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/blog' element={<Blog />} /> 
      </Routes>
    </Router> 
  );
}

export default App
