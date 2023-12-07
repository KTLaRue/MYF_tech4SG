import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Checkbox({select}) {
  return (
    <Fragment>
      <div className="spacing">
        <input type="checkbox" className="center"/>
        <span className="center">{select}</span>
      </div>
    </Fragment>
  );
}
