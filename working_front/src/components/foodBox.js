import { Fragment } from "react";
import { Link } from "react-router-dom";

export function FoodBox({id, name, time, src, favorites, remove, url}) {
  if (favorites){
    return (
      <Fragment>
            <div className="food-main-box" id={id}>
              <div className="food-info">
                <h2 className="food-info-heading heading2">
                  {name}
                </h2>
                <span className="food-info-sub-heading">
                  Prep time: {time}min
                </span>
                <button onClick={() => remove(id)} type="button" className="button">
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
  } else if(url != null) {
    return (
      <Fragment>
            <div className="food-main-box">
              <div className="food-info">
                <h2 className="food-info-heading heading2">
                  {name}
                </h2>
                <span className="food-info-sub-heading">
                  Total Time: {time != 0 ? time + " min" : "Not Available"}
                </span>
                <span className="food-info-sub-heading">
                  <a href={url}>Click Here For Recipe</a>
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
  // event.currentTarget.this.props.id)
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
