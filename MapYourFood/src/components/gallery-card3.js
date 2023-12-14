import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card3-image"
      />
    </div>
  )
}

GalleryCard.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard
