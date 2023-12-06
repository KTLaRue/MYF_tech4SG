import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import { Navbar } from '../components/navbar'

import '../styles/home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Map_Your_Food</title>
        <meta property="og:title" content="Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Find Nearby Stores and Collect Recipes
            </h1>
            <span className="home-hero-sub-heading">
              Discover a user-friendly website with all your meal planning needs
            </span>
            <div className="home-btn-group">
              <Link to="/recipes" className="home-hero-button1 button">
                Get Started
              </Link>
              <a href="#FAQ" className="home-hero-button2 button">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <Link to="/favorites" className="home-navlink05">
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
                  className="home-feature-card1"
                ></FeatureCard>
              </Link>
              <Link to="/recipes">
                <FeatureCard
                  Heading="Collect Recipes Based on Food Restrictions"
                  SubHeading="Discover recipes that cater to your specific dietary needs and restrictions."
                  className="home-feature-card2"
                ></FeatureCard>
              </Link>
              <Link to="/favorites">
                <FeatureCard
                  Heading="Track Favorite Recipes"
                  SubHeading="Save and organize your favorite recipes for easy access and meal planning."
                  className="home-feature-card3"
                ></FeatureCard>
              </Link>
              <Link to="/inventory">
                <FeatureCard
                  Heading="Current Inventory"
                  SubHeading="Effortlessly find the food you want at the price you need!"
                  className="home-feature-card4"
                ></FeatureCard>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <Link to="/recipes" className="home-navlink10">
          <div className="home-gallery1">
            <h1 className="home-gallery-heading heading2">
              Discover Nearby Stores
            </h1>
            <span className="home-gallery-sub-heading">
              Explore a wide range of stores near you
            </span>
            <div className="home-container5">
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1505066827145-34bcde228211?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxzdG9yZXN8ZW58MHx8fHwxNzAxMTM2MTMyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1561710309-9a739908b336?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxzdG9yZXN8ZW58MHx8fHwxNzAxMTM2MTMyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName1"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1513107132060-48f411aff83c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwMHx8c3RvcmUlMjBmcm9udHxlbnwwfHx8fDE3MDExMzYyNTh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName3"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1602254992120-5b3c3dad1d9d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHN0b3JlJTIwZnJvbnR8ZW58MHx8fHwxNzAxMTM2MTczfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName2"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1588110919463-73dfc27cacf6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE3M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName4"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1506073869338-9d4cc16bae4c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDgzfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjIzOHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName5"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1544059799-1e84c415f2d6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE3M3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName6"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1505066827145-34bcde228211?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE5MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName7"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMzfHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE5MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName8"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1575842763096-d9dfa88e7f1e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ2fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjE5MHww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName9"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1601885086630-c356fca1be0b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ5fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjIyMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName10"
              ></GalleryCard3>
              <GalleryCard3
                image_src="https://images.unsplash.com/photo-1593290930536-9ada74584e4b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxzdG9yZSUyMGZyb250fGVufDB8fHx8MTcwMTEzNjIyMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="rootClassName11"
              ></GalleryCard3>
            </div>
          </div>
        </Link>
      </div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container6">
              <span className="home-text05 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 id="FAQ" className="home-text08 heading2">
                Common questions
              </h2>
              <span className="home-text09">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container7">
              <Question
                Answer="The website uses geolocation technology to determine the user's current location and then searches for stores in the vicinity."
                Question="How does the website find nearby stores?"
              ></Question>
              <Question
                Answer="Yes, you can specify your food restrictions in your profile settings. The website will then filter recipes based on your restrictions."
                Question="Can I specify my food restrictions?"
              ></Question>
              <Question
                Answer="Yes, you can save your favorite recipes to your profile. The website will keep track of them for you."
                Question="Can I track my favorite recipes?"
              ></Question>
              <Question
                Answer="Absolutely! The website provides a meal planning feature where you can schedule your meals and add recipes to each day."
                Question="Can I plan my meals using this website?"
              ></Question>
              <Question
                Answer="Yes, the website is designed to be user-friendly and intuitive. We strive to provide a seamless experience for our users."
                Question="Is the website easy to use?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
  )
}

export default Home
