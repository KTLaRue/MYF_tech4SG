import { Fragment } from "react";
import { Link } from "react-router-dom";

export function FoodBox({name, time, src, favorites}) {
  if (favorites){
    return (
      <Fragment>
            <div className="food-main-box">
              <div className="food-info">
                <h2 className="food-info-heading heading2">
                  {name}
                </h2>
                <span className="food-info-sub-heading">
                  Prep time: {time}min
                </span>
                <button type="button" className="button">
                  Remove from Favorites
                </button>
              </div>
              <img
                alt="image"
                src={src}
                className="details-image"
              />
            </div>
      </Fragment>
    );
  }

  // food item is not in favorites page
  return (
    <Fragment>
          <div className="food-main-box">
            <div className="food-info">
              <h2 className="food-info-heading heading2">
                {name}
              </h2>
              <span className="food-info-sub-heading">
                Prep time: {time}min
              </span>
              <button type="button" className="button">
                Remove from Favorites
              </button>
            </div>
            <img
              alt="image"
              src={src}
              className="details-image"
            />
          </div>
    </Fragment>
  );
}
