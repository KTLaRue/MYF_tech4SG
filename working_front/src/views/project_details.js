import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import '../styles/style.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
import { BoxWtext } from '../components/boxWtext'
import { ButtonLink } from '../components/buttonLink'
import { Writeup } from '../components/writeup'

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
            <dt>CSCI 436/536, Fall 2023, Ahmed</dt>
            <dt>Description of project</dt>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
            <dt>Research Methodolgy</dt>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
            <dt>Final Product</dt>
                <dd>- </dd>
                <dd>- </dd>
                <dd>- </dd>
            <dt>Video</dt>
                <dd>- </dd>
            <dt>Future Work</dt>
                <dd>- </dd>
          </dl>

        </div>
        
        {/* <dl>
            <dt>Coffee</dt>
                <dd>- black hot drink</dd>
            <dt>Milk</dt>
                <dd>- white cold drink</dd>
        </dl> */}

    </Fragment>
    
    
  )
}

export default Project_details
