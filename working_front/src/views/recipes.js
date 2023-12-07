import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import '../styles/style.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
import { ButtonWtext } from '../components/buttonWtext'
import { CatCol } from '../components/catCol'
import { ButtonLink } from '../components/buttonLink'

const diet_cat = ["Balanced", "High-fiber", "Low-Crab", "Low-Fat", "Low-Sodium", "High-Protein"]
const cuisine_cat = ["American", "Asian", "British", "Caribbean", "Chinese", 
                    "Central Europe", "Eastern Europe", "French", "Indian", 
                    "Italian", "Japanese", "Kosher", "Mediterranean", "Mexican", 
                    "Middle Eastern", "Nordic", "South American", "South East Asian"]
const dish_cat = ["Biscuits and Cookies", "Bread", "Cereals", "Condiments and Sauces", 
                  "Desserts", "Drinks", "Main Course", "Pancake", "Preps", "Preserve", 
                  "Salad", "Sandwiches", "Soup", "Side Dish", "Sweets"]

const health_cat = ["Alcohol-Cocktail", "Alcohol-Free", "Celery-Free", "Crustacean-Free", 
                    "Dairy-Free", "DASH", "Egg-Free", "Fish-Free", "Fodmap-Free", 
                    "Gluten-Free", "Immuno-Supportive", "Keto-Friendly", 
                    "Kidney-Friendly", "Kosher", "Low-Fat-Abs", "Low-Potassium", 
                    "Low-Sugar", "Lupine-Free", "Mediterranean", "Mollusk-Free", 
                    "Mustard-Free", "No-Oil-Added", "Paleo", "Pescatarian", 
                    "Peanut-Free", "Pork-Free", "Red-Meat-Free", "Sesame-Free", 
                    "Shellfish-Free", "Soy-Free", "Sugar-Conscious", "Sulfite-Free", 
                    "Tree-Nut-Free", "Vegan", "Vegetarian", "Wheat-Free"]
      

const Recipes = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>recipes - Map_Your_Food</title>
        <meta property="og:title" content="recipes - Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <Title title="Looking for new recipes? Find them here!"/>

      <div className="button-bar">
        <ButtonWtext aspect="Calories"/>
        <ButtonWtext aspect="Time"/>
        <ButtonWtext aspect="Meal name"/>
        {/* button below should map to recipe display page */}
        <ButtonLink label="Search"/> 
      </div>
      <div className="cat-options">
        <CatCol catagory="Diet" subCat={diet_cat}/>
        <CatCol catagory="Health" subCat={health_cat}/>
        <CatCol catagory="Cuisine" subCat={cuisine_cat}/>
        <CatCol catagory="Dish" subCat={dish_cat}/>
      </div>
    </div>
  )
}

export default Recipes
