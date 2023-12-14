import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FoodBox } from "./foodBox";


export function Recipe_list() {
  return (
    <Fragment>
      <div className="gallery">
        <div className="gallery1">
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
    </Fragment>
  );
}
