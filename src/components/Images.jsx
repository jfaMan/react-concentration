import React from 'react';
import images from './images/index'
import Select from './music/Select.mp3'

const Images = () => {

  const handleClick = () => {
    const select = new Audio(Select);
    select.play();
  }

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
              onClick={handleClick}
            />
          )
        })
      }
    </div>
  )
}

export default Images;