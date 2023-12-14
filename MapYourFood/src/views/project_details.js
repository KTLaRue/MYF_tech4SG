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
                <dd>- Josh King: kingj44@wwu.edu</dd>
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
                <dd>- We read through 8 papers and came up with several ideas for our design. We learned that having the user input what they want to use in a meal is the cleanest way to know what's in their pantry. We also learned that a favorits system would help to tailor the site to the users and provide better results. we also learned about what types of page layout made it easier for people to use and understand how they could interact with the website </dd>
                <dd>- We analyzed 8 systems and came up with several changes and additional features to help improve our website. One of these a store info card with inventory and coupons sections. This allows users to see what is on sale at tier desired store and see if there is anything that they need that can be purchased for a reduced price. Another new page is the food ingredient page. This has all the locations that a user can find that item as well as the price at each location. It allows the user to add that item to a cart to more effectively keep track of what items a user needs to purchase and at what locations they might need to visit. Along with this it shows a sample of a recipe nutrition page which now not only shows info like ingredients, cook time, and calories but also price and nutrition information to better inform the user to make budget friendly and healthy decisions. The Home page was also changed to show more pictures of recipes to encourage newcomers to click around and use the site. Some features of the site would be restricted until a user logs in like the shopping list and favorites list but they could still search for recipes and ingredients. </dd>
                <dd>- In our user study, we conducted four interviews to gather insights into the user experience of our website. The findings from these interviews have been positive, indicating that the features integrated into our website align well with user preferences and needs. It’s reassuring to see that our design choices have been effective in addressing the key aspects highlighted during the interviews. Users expressed satisfaction with the website features, suggesting that the design decisions made were thoughtful and responsive to their requirements. This validation from the user interviews indicates that we have successfully incorporated elements that resonate with our target audience, contributing to a positive user experience. These findings affirm that our approach to design and development has been user-centric and in tune with the needs of our audience.</dd>

            <dt>Final Product</dt>
                <dd>- The recipe search uses a 3rd party API called Edamam which we query using the information filled into website page. We have options to refine searches by max time, calories, cuisine like American or South East Asian, type of dish like salad or main dishes, types of diet like low-carb or high-protein, and many types of health options inluding peanut free and vegan. After being we get the data from our query we display it at the bottom of the page is showing the total name, picture, prep time, and a link to the website containing the recipe to help the user explore their options.</dd>
                <dd>- Our stores page now has this cool feature that makes it easier for users – we integrated the Google Maps API. So, when you start a search, a new page pops up and kicks off the Google Maps API, creating a map centered around a specific spot. If you hit the “Use My Location” button, it automatically grabs your current location, finds nearby grocery stores, and puts markers on the map. One neat thing is the “Get Directions” button – it helps you plan your route from where you are to your chosen grocery store, and it defaults to the ‘DRIVING’ mode. The magic happens with the Google Maps API script dynamically loading and using different functions to handle things like where you are, finding stores, putting markers on the map, and showing directions.</dd>
                <dd>- In our research and development, we iteratively refined PostgreSQL and SQLite databases, optimizing schema structures and query performance. Integrating the backend with a frontend web page, we created an interface to showcase example queries, demonstrating the databases’ capabilities. This process strengthened our understanding of database management while delivering a system that combines functionality with a user-friendly interface. Taking this further, we would continue to develop the query capability of the front end sight and create cross page interaction with the favorites tab.</dd>
                <dd>- The favorites feature allows a user to organize their favorite recipes, as well as a way to keep track of recipes that they might be interested in cooking. It is accessible on a live status so users can add or remove recipes to the favorites list for ease of navigation, meal planning, and meal tracking.</dd>
                <dd>- WE have gone through several versions of this project from learening about React, Node.js and Express to HTML and a couple other libraries. We have also worked with SQL, Glitch, and sqllite for glitch.</dd>
                {/* link to project code repo */}
                <dd><a href= "https://github.com/KTLaRue/MYF_tech4SG">Code Repo</a></dd>
            <dt>Video</dt>
                {/* link to website video */}
                <dd><a href= "https://youtu.be/foOfYFhExf0">Website Walkthrough</a></dd>
            <dt>Future Work</dt>
                <dd>- This project does not have all the things we wanted to implement so there are lots of ways to expand this project. we are currently using a mock database for the inventory but idealyy this could be linked to local stores directly for ease of use. we also have not implemented the seach/buy features for each recipie and the cart so that can also be added</dd>
          </dl>

        </div>
        

    </Fragment>
    
    
  )
}

export default Project_details
