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
                <dd>- Problem</dd>
                <dd>- what are we solving?</dd>
                <dd>- SDG goal?</dd>
                <dd>- Why is this important?</dd>
                <dd>- Who are we targeting? why should they care</dd>
                <dd>- How many people could this impact?</dd>
                <dd>- what is the solution</dd>
                <dd>- How is this different?</dd>
                <dd>- What technology have we used? why?</dd>
            <dt>Research Methodolgy</dt>
                <dd>- Explain your systematic literature review. How many papers did you read? Write a summary of your findings. Give the pictures of your group prototype.</dd>
                <dd>- Explain your system analysis. How many systems did you analyze? Write a summary of your findings. Give the pictures of your updated group prototype</dd>
                <dd>- Explain your user study. How many interviews did you conduct? Write a summary of your findings. Give the pictures of your updated group prototype.</dd>
            <dt>Final Product</dt>
                <dd>- discuss every feature</dd>
                <dd>- discuss all technologies/software/API's used</dd>
                {/* link to project code repo */}
                <dd><a href= "https://github.com/KTLaRue/MYF_tech4SG">Code Repo</a></dd>
            <dt>Video</dt>
                {/* link to website video */}
                {/* <Link to> */}
                <dd><a href= "">Website Walkthrough (not yet linked)</a></dd>
                {/* </Link> */}
            <dt>Future Work</dt>
                <dd>- How could this be extended and Why would it be useful?</dd>
          </dl>

        </div>
        

    </Fragment>
    
    
  )
}

export default Project_details
