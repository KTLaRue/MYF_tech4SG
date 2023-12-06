import React from 'react';
import ReactDOM from 'react-dom'
import { render } from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './styles/style.css'
import Favorites from './views/favorites'
import Home from './views/home'
import Inventory from './views/inventory'
import Stores from './views/stores'
import Recipes from './views/recipes'
import NotFound from './views/not-found'
import RecipeSearch from "./views/RecipeDisplay"


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/favorites" exact component={Favorites}/>
        <Route path="/inventory" exact component={Inventory}/>
        <Route path="/stores" exact component={Stores}/>
        <Route path="/recipes" exact component={Recipes}/>
        <Route path="*" exact component={NotFound}/>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
