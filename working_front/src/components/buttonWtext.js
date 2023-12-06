import { Fragment } from "react";
import { Link } from "react-router-dom";

export function ButtonWtext({first, second}) {
  return (
    <Fragment>
      <div className="button-text-inputs">
        <div className="text-box">
          <input
            type="text"
            placeholder={first}
            className="auto-width input"
          />
          <span className="auto-width">{first}</span>
        </div>
        <div className="recipes-time">
          <input
            type="text"
            placeholder={second}
            className="auto-width input"
          />
          <span className="auto-width">{second}</span>
        </div>
      </div>
    </Fragment>
  );
}
