import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Recipe_list } from '../components/recipeList'
import { Title } from '../components/Title'
import { FoodBox } from '../components/foodBox'
import "../styles/style.css"

// how do i ceate an list of inital components?
// let inital_list = [
//   {id: 0, {FoodBox name="French Toast (with assorted berries)" time="10" 
//           src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb29kfGVufDB8fHx8MTcwMDk0MjUxNnww&amp;ixlib=rb-4.0.3&amp;w=400"
//           fav={true}/>}},
//   {id: 1, {<FoodBox name="Veggie and Hawaiian Pizza" time="20" 
//           src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZvb2R8ZW58MHx8fHwxNzAwOTQyNTE2fDA&amp;ixlib=rb-4.0.3&amp;w=400" 
//           fav={true}/>}},
//   {id: 2, {<FoodBox name="Berry Icecream " time="60" 
//           src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTcwMDk0MjUxNnww&amp;ixlib=rb-4.0.3&amp;w=400"
//           fav={true}/>}},
//   {id: 3, {<FoodBox name="Cream of Pumpkin Soup" time="30" 
//           src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg2fHxmb29kfGVufDB8fHx8MTcwMDk0MjU1OHww&amp;ixlib=rb-4.0.3&amp;w=400"
//           fav={true}/>}}
// ]
let inital_list = []
// setlist(){

// }

const Favorites = (props) => {
  const [list, setlist] = useState(inital_list)

  return (
    <div className="page-container">
      <Helmet>
        <title>favorites - Map_Your_Food</title>
        <meta property="og:title" content="favorites - Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <Title title="Have a Favorite Recipe? Find it here!"/>
      {/* <Recipe_list/> */}
      <div className="gallery">
        <div className="gallery1">
          <div className="food-main-box">
            <div className="food-info">
              <h2 className="food-info-heading heading2">
                Soup
              </h2>
              <span className="food-info-sub-heading">
                Prep time: 120min
              </span>
              <button type="button" className="button">
                Remove from Favorites
              </button>
            </div>
            <img
              alt="image"
              // src={src}
              className="details-image"
            />
          </div>






          
          <FoodBox name="French Toast (with assorted berries)" time="10" 
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb29kfGVufDB8fHx8MTcwMDk0MjUxNnww&amp;ixlib=rb-4.0.3&amp;w=400"
            fav={true}/>
          <FoodBox name="Veggie and Hawaiian Pizza" time="20" 
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZvb2R8ZW58MHx8fHwxNzAwOTQyNTE2fDA&amp;ixlib=rb-4.0.3&amp;w=400" 
          fav={true}/>
          <FoodBox name="Berry Icecream " time="60" 
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTcwMDk0MjUxNnww&amp;ixlib=rb-4.0.3&amp;w=400"
              fav={true}/>
          <FoodBox name="Cream of Pumpkin Soup" time="30" 
              src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg2fHxmb29kfGVufDB8fHx8MTcwMDk0MjU1OHww&amp;ixlib=rb-4.0.3&amp;w=400"
              fav={true}/>
        </div>
      </div>
    </div>
  )
}

export default Favorites
