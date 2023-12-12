import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


import '../styles/style.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
// import { Writeup } from '../components/writeup'

const Project_details = (props) => {
  return (
    <Fragment>

        <div className="page-container">
      
        <Navbar/>
        <Title title="Want to know more about this website?"/>
        {/* <Writeup/> */}
        <dl>
            <dt>Project Title</dt>
                <dd>- Map Your Food</dd>
            <dt>Names and emails of group members</dt>
                <dd>- Katie LaRue: laruek2@wwu.edu</dd>
                <dd>- Cameron LaPlante</dd>
                <dd>- Anahita Saba</dd>
                <dd>- Josh King</dd>
            <dt>CSCI 436/536, Fall 2023, Shameem Ahmed</dt>
            <dt>Description of project</dt>
                <dd>- Navigating the complex landscape of food management presents a formidable challenge, particularly when faced with the trifecta of acclimating to a new environment, embracing the rigors of a fresh diet, or negotiating the delicate terrain of dietary restrictions. The complexity deepens when financial management enters the stage, intensifying the difficulty for those who are beginners in the world of budgeting or grappling with limited resources that fall short of satisfying their culinary needs. In essence, it becomes a multifaceted puzzle, where the elements involve not only the selection of suitable ingredients but also the coordination of a budget friendly symphony and the resourceful improvisation needed to create a harmonious culinary experience amidst new circumstances.</dd>
                <dd>- This initiative aims to address and enhance various aspects, including nutrition assistance, sustainability, financial planning, convenience hurdles, food education and meal preparation, the minimization of food waste, accessibility to information, promotion of healthy eating habits, diversification of meal options, bolstering mental wellbeing, and fostering environmental awareness.</dd>
                <dd>- This project will be focused on the SDG goals of Good Health and Well being as well as No Hunger.</dd>
                <dd>- The challenge of food management and insecurity is not confined to specific regions; it resonates globally, impacting individuals from diverse walks of life. This pervasive issue represents a daunting hurdle, as many grapple with the complexities of understanding and tracking their dietary habits. The significance of addressing this problem lies in dismantling barriers that hinder individuals from adopting healthy, holistic diets. By providing a user friendly and intuitive interface, accessible on a worldwide scale, we have the potential to catalyze improvements in the quality of life for people around the globe.</dd>
                <dd>- Our target users are anyone who has moved to a new environment, starting new diets, dealing with dietary restrictions, people needing or wanting to improve their health through food, or those with limited resources. In essence, anyone who eats! They should care because managing food effectively directly impacts ones health, wellbeing, and financial stability. </dd>
                <dd>- Based on reports from WHO, “Around 2.3 billion people in the world (29.3%) were moderately or severely food insecure in 2021 which is 350 million more compared to before the outbreak of the COVID19 pandemic.” The CDC states that In 2021, 5.9% of adults lived in families experiencing food insecurity in the past 30 days. Women were more likely to live in families experiencing food insecurity (6.5%) than men (5.2%). One last source is the FRAC who states Over 33.8 million Americans (10.2) lived in households that struggled against food insecurity, or lack of access to an affordable, nutritious diet. One in 26 (3.8 percent) of households in the U.S. experienced very low food security, a more severe form of food insecurity, where households report regularly skipping meals or reducing intake because they could not afford more food.</dd>
                <dd>- Our solution is an app or website that will take into account ones dietary needs, budget, location, and food plan to help find foods and recipes based on what they already have and what is available in the general area. Ideally there would be an SQL food database as backend: track calories, food groups, what diets/food plans they belong to, compound foods show ingredients. a Python system to act as go between from data to interface, and an app dev kit to manage the front end that hopefully produces a general interface that processes results for use. We are choosing to create an apple app based on our own convenience. Some of our database information would include meal prep time in a recipe table, green/yellow/red foods based on diet needs, Allergens (dairy free, peanut free, etc.), calories, diets and their corresponding requirements, as well as geography and “close” stores with inventory and prices</dd>
                <dd>- Many of these solutions do not take into account what food you already have or what food is available around you in terms of stores, markets, food pantries, ect. Knowing what food you should be eating is one thing, managing it within a budget and where one can get it is another.</dd>
                <dd>- We have made a website that can be acseeses by anyone for ease of use on personal devices and so that people who dont have computers or a phone can use our website</dd>
            <dt>Research Methodolgy</dt>
                <dd>- Explain your systematic literature review. How many papers did you read? Write a summary of your findings. Give the pictures of your group prototype.</dd>
                
                <dd>- Explain your system analysis. How many systems did you analyze? Write a summary of your findings. Give the pictures of your updated group prototype</dd>
                <dd>- Explain your user study. How many interviews did you conduct? Write a summary of your findings. Give the pictures of your updated group prototype.</dd>
            <dt>Final Product</dt>
                <dd>- discuss every feature</dd>
                <dd>- WE have gone through several versions of this project from learening about React, Node.js and Express to HTML and a couple other libraies that we cant remember. We have also worked with SQL, Glitch, and sqllite for glitch.</dd>
                {/* link to project code repo */}
                <dd><a href= "https://github.com/KTLaRue/MYF_tech4SG">Code Repo</a></dd>
            <dt>Video</dt>
                {/* link to website video */}
                <dd><a href= "">Website Walkthrough (not yet linked)</a></dd>
            <dt>Future Work</dt>
                <dd>- This project does not have all the things we wanted to implement so there are lots of ways to expand this project. we are currently using a mock database for the inventory but idealyy this could be linked to local stores directly for ease of use. we also have not implemented the seach/buy features for each recipie and the cart so that can also be added</dd>
          </dl>

        </div>
        

    </Fragment>
    
    
  )
}

export default Project_details
