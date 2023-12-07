import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import '../styles/inventory.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
import { ButtonWtext } from '../components/buttonWtext'
import { ButtonLink } from '../components/buttonLink'

const Inventory = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Inventory - Map_Your_Food</title>
        <meta property="og:title" content="Inventory - Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <Title title="Need to find raw ingredients or food products? Find them here!"/>
      <ButtonWtext aspect="Food Item"/>
      <ButtonLink label="Search"/> 

      {/* <div className="inventory-hero">
        <div className="inventory-hero1">
          <div className="inventory-container1">
            <h1 className="inventory-hero-heading heading1">
              Need to find raw ingredients or food products? Find them here!
            </h1>
            <div className="inventory-btn-group"></div>
          </div>
          <input type="food item" placeholder="Food Item" className="input" />
          <button type="button" className="button">
            <span>
              <span>Search</span>
              <br></br>
            </span>
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default Inventory
