import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "./checkbox";

export function CatCol({catagory, subCat}) {
  return (
    <Fragment>
        <div className="cat-name">
          <span>{catagory}</span>
          {subCat.map(name => (
            <Checkbox select={name}/>
          ))}

        </div>
    </Fragment>
  );
}
