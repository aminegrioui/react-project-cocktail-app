import React from 'react'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import SingleCocktail from './Pages/SingelCocktail'

import Navbar from './Component/Navbar'
function App() {
  return (
    <Router>
      
        <Navbar/>
        <Switch>
            <Route exact="/" path="/">
              <Home/>
            </Route>
            <Route  path="/about">
              <About/>
            </Route>
            <Route  path="/cocktail/:id">
              <SingleCocktail/>
            </Route>
            <Route  path="*">
              <Error/>
            </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
