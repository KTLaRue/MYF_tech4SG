import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Title({title}) {
  return (
    <Fragment>
      <div className="main-box">
        <div className="inner-box">
          <div className="container">
          <h1 className="start-heading heading1">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
