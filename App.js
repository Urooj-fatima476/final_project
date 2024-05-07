import React from 'react'
import Categories from './User/Categories'
import Navbar from './User/NavBar'
import Home from './User/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <Router>
    <Navbar />
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/Categories">
            <Categories />
          </Route>
    </Router>
    </div>
  )
}

export default App