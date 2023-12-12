import { Fragment } from "react";
import { Link } from "react-router-dom";


export function BoxWtext({aspect, button, name, handleFunction}) {
  if (button==null){
    if(name == null && handleFunction != null) {
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
    } else {
      return (
        <Fragment>
          <div className="button-text-inputs">
            <div className="text-box">
              <input
                type="text"
                placeholder={aspect}
                className="auto-width input"
                name={name}
                onChange={(e) => handleFunction(e)}
              />
              <span className="auto-width">{aspect}</span>
            </div>
          </div>
        </Fragment>
      );
    }
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
