import { Fragment } from "react";
import { Link } from "react-router-dom";

export function ButtonLink({label, loc}) {
  return (
    <Fragment>
      <button type="button" className="stores-search-button button" linkto = {loc}>
          <span>{label}</span>
      </button>
    </Fragment>
  );
}
