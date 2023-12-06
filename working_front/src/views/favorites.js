import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Navbar } from '../components/navbar'
import { Recipe_list } from '../components/recipeList'
import { Title } from '../components/Title'

const Favorites = (props) => {
  return (
    <div className="favorites-container">
      <Helmet>
        <title>favorites - Map_Your_Food</title>
        <meta property="og:title" content="favorites - Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <Title title="Have a Favorite Recipe? Find it here!"/>
      <Recipe_list/>
    </div>
  )
}

export default Favorites
