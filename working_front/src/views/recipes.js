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

const diet_cat = ["diet=balanced", "diet=high-fiber", "diet=high-protein", 
                  "diet=low-carb", "diet=low-fat", "diet=low-sodium"]

const cuisine_cat = ["cuisineType=American", "cuisineType=Asian", "cuisineType=British", "cuisineType=Caribbean", "cuisineType=Chinese", 
                    "cuisineType=Central Europe", "cuisineType=Eastern Europe", "cuisineType=French", "cuisineType=Indian", 
                    "cuisineType=Italian", "cuisineType=Japanese", "cuisineType=Kosher", "cuisineType=Mediterranean", "cuisineType=Mexican", 
                    "cuisineType=Middle Eastern", "cuisineType=Nordic", "cuisineType=South American", "cuisineType=South East Asian"]

const dish_cat = ["dishType=Biscuits and Cookies", "dishType=Bread", "dishType=Cereals", "dishType=Condiments and Sauces", 
                  "dishType=Desserts", "dishType=Drinks", "dishType=Main Course", "dishType=Pancake", "dishType=Preps", "dishType=Preserve", 
                  "dishType=Salad", "dishType=Sandwiches", "dishType=Soup", "dishType=Side Dish", "dishType=Sweets"]

const health_cat = ["health=alcohol-cocktail", "health=alcohol-free", "health=celery-free", "health=crustacean-free", 
                    "health=dairy-free", "health=DASH", "health=egg-free", "health=fish-free", "health=fodmap-free", 
                    "health=gluten-free", "health=immuno-supportive", "health=keto-friendly", 
                    "health=kidney-friendly", "health=kosher", "health=low-potassium", 
                    "health=low-sugar", "health=lupine-free", "health=Mediterranean", "health=mollusk-free", 
                    "health=mustard-free", "health=no-oil-added", "health=paleo", "health=pescatarian", 
                    "health=peanut-free", "health=pork-free", "health=red-meat-free", "health=sesame-free", 
                    "health=shellfish-free", "health=soy-free", "health=sugar-conscious", "health=sulfite-free", 
                    "health=tree-nut-free", "health=vegan", "health=vegetarian", "health=wheat-free"]  

const Recipes = (props) => {
  const [data, setData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [pages, setPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(-1);
  const [options, setOptions] = useState([]);

  function handleSubmit() {
    let type = 'public';
    let app_id = '8877871d';
    let app_key = 'dbb36c61f1e943527747f94213397705';

    let url = `https://api.edamam.com/api/recipes/v2?type=${type}&app_id=${app_id}&app_key=${app_key}`;

    for(const pair of options.entries()) {
      url += "&" + pair[1]["name"] + "=" + pair[1]["value"];
    }

    setPageIndex(0);
    setPages([url])

    fetchNewPage(url);

    setShowResults(true);
  }

  function fetchNewPage(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }

  function nextPage() {
    if(pages.length-1 == pageIndex) {
      let newPages = [...pages, data._links.next.href];
      setPages(newPages);
      fetchNewPage(data._links.next.href);
    } else {
      fetchNewPage(pages[pageIndex + 1]);
    }
    setPageIndex(pageIndex + 1);
  }

  function prevPage() {
    fetchNewPage(pages[pageIndex-1]);
    setPageIndex(pageIndex - 1);
  }

  function handleChange(e) {
    let newOptions = [...options];

    if(e.target.type == "checkbox") {
      let split = e.target.name.indexOf("=");
      let index = options.findIndex(element => element["value"] == e.target.name.substring(split+1, e.target.name.length));
      
      if(index != -1) {
        newOptions.splice(index, 1);
        setOptions(newOptions);
      }

      if(e.target.checked) { 
        setOptions([...newOptions, {name: e.target.name.substring(0, split), value: e.target.name.substring(split + 1, e.target.name.length)}])
      }
    } else {
      let index = options.findIndex(element => element["name"] == e.target.name);

      if(index != -1) {
        newOptions.splice(index, 1);
        setOptions(newOptions);
      }

      if(e.target.value != "") {
        setOptions([...newOptions, {name: e.target.name, value: e.target.value}])
      }
    }
    console.log(e.target.name);
  }

  return (
    <div className="page-container">
      <Navbar/>
      <Title title="Looking for new recipes? Find them here!"/>
        <div className="button-bar">
          <BoxWtext aspect="Calories" name="calories" handleFunction={handleChange}/>
          <BoxWtext aspect="Time" name="time" handleFunction={handleChange}/>
          <BoxWtext aspect="Meal Name" name="q" handleFunction={handleChange}/>
          <button type="search" onClick={handleSubmit}>Search</button>
        </div>
        <div className="cat-options">  
          <div className="cat-name">
            <span>{"Diet"}</span>
            {diet_cat.map(name => (
              <Checkbox key={name} select={name.substring(name.indexOf("=") + 1, name.length)} name={name} handler={handleChange}/>
            ))}
          </div>
          <div className="cat-name">
            <span>{"Health"}</span>
            {health_cat.map(name => (
              <Checkbox key={name} select={name.substring(name.indexOf("=") + 1, name.length)} name={name} handler={handleChange}/>
            ))}
          </div>
          <div className="cat-name">
            <span>{"Cuisine"}</span>
            {cuisine_cat.map(name => (
              <Checkbox key={name} select={name.substring(name.indexOf("=") + 1, name.length)} name={name} handler={handleChange}/>
            ))}
          </div>
          <div className="cat-name">
            <span>{"Dish"}</span>
            {dish_cat.map(name => (
              <Checkbox key={name} select={name.substring(name.indexOf("=") + 1, name.length)} name={name} handler={handleChange}/>
            ))}
            </div>
        </div>
      <div>
        {pageIndex > 0 ? <button onClick={prevPage}>Prev Page</button> : ''}
        {data ? <button onClick={nextPage}>Next Page</button> : ''}
      </div>
      <div>
        {showResults ? <RecipeDisplay queryData={data}/> : ''}
      </div>
    </div>
  )
}

export default Recipes
