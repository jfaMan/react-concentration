import React from 'react';
import images from './images/index'

const Images = () => {
  return (
    <div className="images">
      {images
        .sort(() => Math.random())
        .map((image) => {
          return (
            <div
              className="image"
              name={image.name}
              style={{ backgroundImage: `url(${image.pic})` }}
            />
          )
        })
      }
    </div>
  )
}

export default Images;