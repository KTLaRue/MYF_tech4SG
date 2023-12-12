import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import '../styles/style.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
import { BoxWtext } from '../components/boxWtext'
import { ButtonLink } from '../components/buttonLink'
import RecipeDisplay from './RecipeDisplay'
import { Checkbox } from '../components/checkbox'
import { useState } from 'react'

// const critera = []

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
  const [data, setData] = useState(null);


  function handleSubmit(e) {
    const form = e.target;
    const formData = new FormData(form);

    
  }

  function fetchQuery(query) {

  }

  return (
    <div className="page-container">
      <Navbar/>
      <Title title="Looking for new recipes? Find them here!"/>
      <form method="post" onSubmit={handleSubmit}>
        <div className="button-bar">
          <BoxWtext aspect="Calories"/>
          <BoxWtext aspect="Time"/>
          <BoxWtext aspect="Meal name"/>
          {/* button below should map to recipe display page */}
          {/* <ButtonLink label="Search" loc=/>  */}
          {/*<ButtonLink label="Search"/> */}
          <button type="submit">Search</button>
        </div>
        <div className="cat-options">  
          <div className="cat-name">
            <span>{"Diet"}</span>
            <div className="spacing">
              <input type="checkbox" className="center"/>
              <span className="center">High-Fiber</span>
            </div>
            <div className="spacing">
              <input type="checkbox" className="center"/>
              <span className="center">Balanced</span>
            </div>

          </div>
          <div className="cat-name">
            <span>{"Health"}</span>
            {health_cat.map(name => (
              <Checkbox key={name} select={name}/>
            ))}

          </div><div className="cat-name">
            <span>{"Cuisine"}</span>
            {cuisine_cat.map(name => (
              <Checkbox key={name} select={name}/>
            ))}

          </div><div className="cat-name">
            <span>{"Dish"}</span>
            {dish_cat.map(name => (
              <Checkbox key={name} select={name}/>
            ))}
          </div> 
        </div>
      </form>
      {data ? <RecipeDisplay queryData={data}/> : ''}
    </div>
  )
}

export default Recipes
