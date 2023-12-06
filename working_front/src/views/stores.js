import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { Title } from '../components/Title'
import '../styles/stores.css'
import { Navbar } from '../components/navbar'

const Stores = (props) => {
  return (
    <div className="stores-container">
      <Helmet>
        <title>stores - Map_Your_Food</title>
        <meta property="og:title" content="stores - Map_Your_Food" />
      </Helmet>
      <div className="stores-header">
        <Navbar/>
      </div>
      <Title title="Need to find nearby stores? Find them here!"/>
      <button type="button" className="stores-search-button button" linkto = "/map">
        <span className="stores-text5">
          <span>Search</span>
          <br></br>
        </span>
      </button>
    </div>
  )
}

export default Stores
