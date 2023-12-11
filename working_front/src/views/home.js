import React from 'react'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Navbar } from '../components/navbar'
import { FeatureBox } from '../components/featureBox'
import { Gallery } from '../components/gallary'
import { FAQ } from '../components/FAQ'

import '../styles/home.css'

const Home = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Map_Your_Food</title>
        <meta property="og:title" content="Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <div className="main-box">
        <div className="inner-box">
          <div className="container">
            <h1 className="start-heading heading1">
              Find Nearby Stores and Collect Recipes
            </h1>
            <span className="home-sub-heading">
              Discover a user-friendly website with all your meal planning needs
            </span>
            <div className="home-btn-group">
              <Link to="/recipes" className="home-button1 button">
                Get Started
              </Link>
              <a href="#FAQ" className="home-button2 button">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <Link to="/favorites" className="home-navlink">
          <div className="home-details1">
            <div className="home-container2">
              <h2 className="home-details-heading heading2">
                Plan Your Meals with Ease
              </h2>
              <span className="home-details-sub-heading">
                Our website allows you to track your favorite recipes and plan
                meals effortlessly. Say goodbye to the hassle of meal planning!
              </span>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1515982200576-f29f11444503?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDY4NjY4Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              className="home-details-image"
            />
          </div>
        </Link>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <FeatureBox/>
        </div>
      </div>
      <Gallery/>
      <div className="home-banner"></div>
      <FAQ/>
      <div className="home-footer"></div>
    </div>
  )
}

export default Home
