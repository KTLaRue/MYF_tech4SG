import { Fragment } from "react";
import { Link } from "react-router-dom";
import Question from "./question";

export function FAQ() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
