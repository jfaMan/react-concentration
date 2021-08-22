import React from 'react';
import images from './images/index'
import Correct from './music/Correct.mp3'
import Wrong from './music/Wrong.mp3'


// Each card has either a true/false found value. If a card is found, it is NOT clickable.
// If it is NOT found, it is clickable, and the image-blank class property will change to image.
// Two cards will be put into an array and checked. If they have the same name, it's a match.
// Otherwise, they will change back to image-blank.
// LET'S GO!!!!

const Images = () => {

  let cards = [];

  const handleClick = (event) => {
    const card = event.target
    if (card.getAttribute("found") === "true") {
      return;
    } else {
      card.classList.remove('image-blank')
      card.setAttribute("found", "true")
      cards.push(card)
      if (cards.length === 2) {
        checkNames(cards[0], cards[1])
      } else {
        return;
      }
    }
  }
  
  const checkNames = (card1, card2) => {
    if (card1 === card2) {
      const correct = new Audio(Correct);
      correct.play();
    } else {
      card1.setAttribute("found", "false")
      card2.setAttribute("found", "false")
      card1.classList.add('image-blank')
      card2.classList.add('image-blank')
      cards.shift()
      cards.shift()
      const wrong = new Audio(Wrong);
      wrong.play();
    }
  }

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
}

export default Images;