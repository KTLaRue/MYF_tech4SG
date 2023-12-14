import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Navbar } from "../components/navbar";
import { Recipe_list } from "../components/recipeList";
import { Title } from "../components/Title";
import { FoodBox } from "../components/foodBox";
import "../styles/style.css";

let inital_list = [
  {
    id: 0,
    name: "French Toast (with assorted berries)",
    time: "30",
    link: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxmb29kfGVufDB8fHx8MTcwMDk0MjUxNnww&amp;ixlib=rb-4.0.3&amp;w=400",
    fav: true,
  },
  {
    id: 1,
    name: "Veggie and Hawaiian Pizza",
    time: "20",
    link: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGZvb2R8ZW58MHx8fHwxNzAwOTQyNTE2fDA&amp;ixlib=rb-4.0.3&amp;w=400",
    fav: true,
  },
  {
    id: 2,
    name: "Berry Icecream",
    time: "30",
    link: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTcwMDk0MjUxNnww&amp;ixlib=rb-4.0.3&amp;w=400",
    fav: true,
  },
  {
    id: 3,
    name: "Cream of Pumpkin Soup",
    time: "50",
    link: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg2fHxmb29kfGVufDB8fHx8MTcwMDk0MjU1OHww&amp;ixlib=rb-4.0.3&amp;w=400",
    fav: true,
  },
];

// function removebox(id){
//   console.log("test remove")
//   console.log(list)
  
//   //get id of event
//   //remove id from initalist - newlist = list.pop(id)
//   //setlist(newlist)
// }

const Favorites = (props) => {
  const [list, setlist] = useState(inital_list);
  function removebox(id){
    console.log("test remove")
    console.log(list[id])
    
    //get id of event
    //remove id from initalist - newlist = list.pop(id)
    //setlist(newlist)
  }

  return (
    <div className="page-container">
      <Navbar />
      <Title title="Have a Favorite Recipe? Find it here!" />
      <div className="gallery">
        <div className="gallery1">
          {list.map(box => (
              <FoodBox key={box.id} name={box.name} time={box.time} src={box.link} favorites={box.fav} remove={removebox}/>
              
            ))}


        </div>
      </div>
    </div>
  );
};

export default Favorites;
