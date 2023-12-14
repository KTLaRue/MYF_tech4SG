import { Fragment } from "react";
import { Link } from "react-router-dom";
import FeatureCard from "./feature-card";

export function FeatureBox() {
  return (
    <Fragment>
      <div className="home-features1">
            <div className="home-container3">
              <h2 className="home-features-heading heading2">
                Discover the Features
              </h2>
              <span className="home-features-sub-heading">
                Experience the convenience of our user-friendly website
              </span>
            </div>
            <div className="home-container4">
              <Link to="/stores">
                <FeatureCard
                  Heading="Find Nearby Stores"
                  SubHeading="Easily locate stores in your area to shop for groceries and ingredients."
                  className="home-feature-card"
                ></FeatureCard>
              </Link>
              <Link to="/recipes">
                <FeatureCard
                  Heading="Collect Recipes Based on Food Restrictions"
                  SubHeading="Discover recipes that cater to your specific dietary needs and restrictions."
                  className="home-feature-card"
                ></FeatureCard>
              </Link>
              <Link to="/favorites">
                <FeatureCard
                  Heading="Track Favorite Recipes"
                  SubHeading="Save and organize your favorite recipes for easy access and meal planning."
                  className="home-feature-card"
                ></FeatureCard>
              </Link>
              <Link to="/inventory">
                <FeatureCard
                  Heading="Current Inventory"
                  SubHeading="Effortlessly find the food you want at the price you need!"
                  className="home-feature-card"
                ></FeatureCard>
              </Link>
            </div>
          </div>
    </Fragment>
  );
}
