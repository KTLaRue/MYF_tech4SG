import { Fragment } from "react";
import { Link } from "react-router-dom";

export function ButtonLink({label, loc}) {
  return (
    <Fragment>
      {/* <Link to={loc} */}
      <button type="button" className="search-button button" linkto = {loc}>
          <span>{label}</span>
      </button>
    </Fragment>
  );
}
