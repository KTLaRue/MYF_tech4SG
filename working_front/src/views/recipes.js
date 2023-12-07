import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import '../styles/recipes.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
import { ButtonWtext } from '../components/buttonWtext'
import { CatCol } from '../components/catCol'

const diet_cat = ["Balanced", "High-fiber", "Low-Crab", "Low-Fat", "Low-Sodium", "High-Protein"]
// const health_cat = []
// const cuisine_cat = []
// const dish_cat = []

const Recipes = (props) => {
  return (
    <div className="recipes-container">
      <Helmet>
        <title>recipes - Map_Your_Food</title>
        <meta property="og:title" content="recipes - Map_Your_Food" />
      </Helmet>
      <div className="recipes-header">
        <Navbar/>
        <Title title="Looking for new recipes? Find them here!"/>
      </div>
      <div className="button-bar">
        <ButtonWtext aspect="Calories"/>
        <ButtonWtext aspect="Time"/>
        <ButtonWtext aspect="Meal name"/>
      </div>
      <div className="cat-options">
        <CatCol catagory="Diet" subCat={diet_cat}/>
        {/* <CatCol catagory="Health" subCat={health_cat}/> */}
        {/* <CatCol catagory="Cuisine" subCat={cuisine_cat}/> */}
        {/* <CatCol catagory="Dish" subCat={dish_cat}/> */}
{/* need to update past here */}
        <div className="cat-name">
          <span className="recipes-title1">Health</span>
          <div className="recipes-alcohol-cocktail">
            <input
              type="checkbox"
               
              className="recipes-checkbox06"
            />
            <span className="recipes-text11">Alcohol-Cocktail</span>
          </div>
          <div className="recipes-alcohol-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox07"
            />
            <span className="recipes-text12">Alcohol-Free</span>
          </div>
          <div className="recipes-celery-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox08"
            />
            <span className="recipes-text13">Celery-Free</span>
          </div>
          <div className="recipes-crustacean-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox09"
            />
            <span className="recipes-text14">Crustacean-Free</span>
          </div>
          <div className="recipes-dairy-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox10"
            />
            <span className="recipes-text15">Dairy-Free</span>
          </div>
          <div className="recipes-dash">
            <input
              type="checkbox"
               
              className="recipes-checkbox11"
            />
            <span className="recipes-text16">DASH</span>
          </div>
          <div className="recipes-egg-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox12"
            />
            <span className="recipes-text17">Egg-Free</span>
          </div>
          <div className="recipes-fish-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox13"
            />
            <span className="recipes-text18">Fish-Free</span>
          </div>
          <div className="recipes-fodmap-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox14"
            />
            <span className="recipes-text19">Fodmap-Free</span>
          </div>
          <div className="recipes-gluten-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox15"
            />
            <span className="recipes-text20">Gluten-Free</span>
          </div>
          <div className="recipes-immuno-supportive">
            <input
              type="checkbox"
               
              className="recipes-checkbox16"
            />
            <span className="recipes-text21">Immuno-Supportive</span>
          </div>
          <div className="recipes-keto-friendly">
            <input
              type="checkbox"
               
              className="recipes-checkbox17"
            />
            <span className="recipes-text22">Keto-Friendly</span>
          </div>
          <div className="recipes-kidney-friendly">
            <input
              type="checkbox"
               
              className="recipes-checkbox18"
            />
            <span className="recipes-text23">Kidney-Friendly</span>
          </div>
          <div className="recipes-kosher">
            <input
              type="checkbox"
               
              className="recipes-checkbox19"
            />
            <span className="recipes-text24">Kosher</span>
          </div>
          <div className="recipes-low-fat-abs">
            <input
              type="checkbox"
               
              className="recipes-checkbox20"
            />
            <span className="recipes-text25">Low-Fat-Abs</span>
          </div>
          <div className="recipes-low-potassium">
            <input
              type="checkbox"
               
              className="recipes-checkbox21"
            />
            <span className="recipes-text26">Low-Potassium</span>
          </div>
          <div className="recipes-low-sugar">
            <input
              type="checkbox"
               
              className="recipes-checkbox22"
            />
            <span className="recipes-text27">Low-Sugar</span>
          </div>
          <div className="recipes-lupine-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox23"
            />
            <span className="recipes-text28">Lupine-Free</span>
          </div>
          <div className="recipes-mediterranean">
            <input
              type="checkbox"
               
              className="recipes-checkbox24"
            />
            <span className="recipes-text29">Mediterranean</span>
          </div>
          <div className="recipes-mollusk-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox25"
            />
            <span className="recipes-text30">Mollusk-Free</span>
          </div>
          <div className="recipes-mustard-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox26"
            />
            <span className="recipes-text31">Mustard-Free</span>
          </div>
          <div className="recipes-no-oil-added">
            <input
              type="checkbox"
               
              className="recipes-checkbox27"
            />
            <span className="recipes-text32">No-Oil-Added</span>
          </div>
          <div className="recipes-paleo">
            <input
              type="checkbox"
               
              className="recipes-checkbox28"
            />
            <span className="recipes-text33">Paleo</span>
          </div>
          <div className="recipes-peanut-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox29"
            />
            <span className="recipes-text34">Peanut-Free</span>
          </div>
          <div className="recipes-pescatarian">
            <input
              type="checkbox"
               
              className="recipes-checkbox30"
            />
            <span className="recipes-text35">Pescatarian</span>
          </div>
          <div className="recipes-pork-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox31"
            />
            <span className="recipes-text36">Pork-Free</span>
          </div>
          <div className="recipes-red-meat-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox32"
            />
            <span className="recipes-text37">Red-Meat-Free</span>
          </div>
          <div className="recipes-sesame-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox33"
            />
            <span className="recipes-text38">Sesame-Free</span>
          </div>
          <div className="recipes-shellfish-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox34"
            />
            <span className="recipes-text39">Shellfish-Free</span>
          </div>
          <div className="recipes-soy-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox35"
            />
            <span className="recipes-text40">Soy-Free</span>
          </div>
          <div className="recipes-sugar-conscious">
            <input
              type="checkbox"
               
              className="recipes-checkbox36"
            />
            <span className="recipes-text41">Sugar-Conscious</span>
          </div>
          <div className="recipes-sulfite-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox37"
            />
            <span className="recipes-text42">Sulfite-Free</span>
          </div>
          <div className="recipes-tree-nut-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox38"
            />
            <span className="recipes-text43">Tree-Nut-Free</span>
          </div>
          <div className="recipes-vegan">
            <input
              type="checkbox"
               
              className="recipes-checkbox39"
            />
            <span className="recipes-text44">Vegan</span>
          </div>
          <div className="recipes-vegetarian">
            <input
              type="checkbox"
               
              className="recipes-checkbox40"
            />
            <span className="recipes-text45">Vegetarian</span>
          </div>
          <div className="recipes-wheat-free">
            <input
              type="checkbox"
               
              className="recipes-checkbox41"
            />
            <span className="recipes-text46">Wheat-Free</span>
          </div>
        </div>
        <div className="recipes-cuisine-type">
          <span className="recipes-title2">
            <span>Cuisine Type</span>
            <br></br>
          </span>
          <div className="recipes-american">
            <input
              type="checkbox"
               
              className="recipes-checkbox42"
            />
            <span className="recipes-text49">American</span>
          </div>
          <div className="recipes-asian">
            <input type="checkbox"   />
            <span>Asian</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>British</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Caribbean</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Central Europe</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Chinese</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Eastern Europe</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>French</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Indian</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Italian</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Japanese</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Kosher</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Mediterranean</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Mexican</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Middle Eastern</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Nordic</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>South American</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>South East Asian</span>
          </div>
        </div>
        <div className="recipes-dish-type">
          <span className="recipes-title3">
            <span>Dish Type</span>
            <br></br>
          </span>
          <div className="recipes-content-box">
            <input
              type="checkbox"
               
              className="recipes-checkbox60"
            />
            <span className="recipes-text69">Biscuits and Cookies</span>
          </div>
          <div className="recipes-bread">
            <input type="checkbox"   />
            <span>Bread</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Cereals</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Condiments and Sauces</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Desserts</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Drinks</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Main Course</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Pancake</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Preps</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Preserve</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Salad</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Sandwiches</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Side Dish</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Soup</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Starter</span>
          </div>
          <div className="recipes-content-box">
            <input type="checkbox"   />
            <span>Sweets</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipes
