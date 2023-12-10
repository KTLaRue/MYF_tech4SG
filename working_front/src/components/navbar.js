import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Fragment>
      <div className="banner">
        <div className="header">
          <header data-thq="thq-navbar" className="navbar-interactive">
            <div data-thq="thq-navbar-nav" className="desktop-menu">
              <nav className="main-links">
                <Link to="/" className="navlink">
                  Home
                </Link>
                <Link to="/favorites" className="navlink">
                  Favorites
                </Link>
                <Link to="/stores" className="navlink">
                  Stores
                </Link>
                <Link to="/recipes" className="navlink">
                  Recipes
                </Link>
                <Link to="/inventory" className="navlink">
                  Inventory
                </Link>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </Fragment>
  );
}
