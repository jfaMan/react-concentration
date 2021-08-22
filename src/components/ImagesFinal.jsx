import React from 'react';
import images from './images/index';

const ImagesFinal = React.memo((props) => {
  const {handleClick} = props;
  
  return (
    <div className="images">
      {images
        .sort(() => Math.random() - 0.5)
        .map((image) => {
          return (
            <div
              className="image image-blank"
              name={image.name}
              style={{ backgroundImage: `url(${image.pic})` }}
              found="false"
              onClick={handleClick}
            />
          )
        })
      }
    </div>
  )
})

export default ImagesFinal;