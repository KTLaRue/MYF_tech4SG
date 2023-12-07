import { Fragment } from "react";
import { Link } from "react-router-dom";


export function ButtonWtext({aspect, button}) {
  if (button==null){
    return (
      <Fragment>
        <div className="button-text-inputs">
          <div className="text-box">
            <input
              type="text"
              placeholder={aspect}
              className="auto-width input"
            />
            <span className="auto-width">{aspect}</span>
          </div>
        </div>
      </Fragment>
    );
  }else{
    return (
      <Fragment>
        <div className="button-text-inputs">
          <div className="text-box">
            <input
              type="text"
              placeholder={aspect}
              className="auto-width input"
            />
            <span className="auto-width">{button}</span>
          </div>
        </div>
      </Fragment>
    );
  }
  
}
