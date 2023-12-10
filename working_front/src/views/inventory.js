import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import '../styles/style.css'
import { Navbar } from '../components/navbar'
import { Title } from '../components/Title'
import { BoxWtext } from '../components/boxWtext'
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
      <BoxWtext aspect="Food Item"/>
      {/* button currently linked to home page */}
      <ButtonLink label="Search" loc="./recipes"/> 
    </div>
  )
}

export default Inventory
