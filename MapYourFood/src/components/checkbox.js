import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Checkbox({select, name, handler}) {
  return (
    <Fragment>
      <div className="spacing">
        <input type="checkbox" className="center" name={name} onChange={(e) => handler(e)}/>
        <span className="center">{select}</span>
      </div>
    </Fragment>
  );
}
