import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { Title } from '../components/Title'
import { Navbar } from '../components/navbar'
import { ButtonLink } from '../components/buttonLink'
import '../styles/style.css'

const Stores = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>stores - Map_Your_Food</title>
        <meta property="og:title" content="stores - Map_Your_Food" />
      </Helmet>
      <Navbar/>
      <Title title="Need to find nearby stores? Find them here!"/>
      {/* button below should link to maps page */}
      <ButtonLink label="Search" />
    </div>
  )
}

export default Stores
