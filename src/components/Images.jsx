import React, { useEffect, useState } from 'react';
import images from './images/index';
import Correct from './music/Correct.mp3';
import Wrong from './music/Wrong.mp3';
import Completed from './music/Completed.mp3';
import GameOver from './music/GameOver.mp3';


// Each card has either a true/false found value. If a card is found, it is NOT clickable.
// If it is NOT found, it is clickable, and the image-blank class property will change to image.
// Two cards will be put into an array and checked. If they have the same name, it's a match.
// Otherwise, they will change back to image-blank.
// LET'S GO!!!!

const Images = (props) => {
  const { gameMusic, handleEndGame, calculateScore, score } = props;
  const [ characters, setCharacters ] = useState([])
  const [ flippedCards, setFlippedCards ] = useState(0);

  useEffect(() => {
    setCharacters(images.sort(() => Math.random() - 0.5))
    // console.log('mounting')
    // return () => console.log('unmounting')
  }, []) // Will run once on mount

  useEffect(() => {
    checkEndGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flippedCards])

  useEffect(() => {
    checkEndGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])


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
    if (card1.getAttribute("name") === card2.getAttribute("name")) {
      setTimeout(() => {
        const correct = new Audio(Correct);
        correct.play();
      }, 100)
      setFlippedCards(flippedCards + 2)
      cards.shift();
      cards.shift();
    } else {
      setTimeout(() => {
        const wrong = new Audio(Wrong);
        wrong.play();
      }, 100)
      setTimeout(() => {
        card1.setAttribute("found", "false")
        card2.setAttribute("found", "false")
        card1.classList.add('image-blank')
        card2.classList.add('image-blank')
      }, 1000)
      cards.shift()
      cards.shift()
      calculateScore()
    }
  }
  
  const checkEndGame = () => {
    if (flippedCards === 16 ) {
      gameMusic.volume = 0.5;
      setTimeout(() => {
        const completed = new Audio(Completed);
        completed.play();
      }, 100)
      setTimeout(() => {
        handleEndGame(true)
      }, 4000)
    } else if (score === 0) {
      gameMusic.pause();
      setTimeout(() => {
        const gameover = new Audio(GameOver);
        gameover.play();
      }, 100)
      setTimeout(() => {
        handleEndGame(true)
      }, 4000)
    } else {
      return;
    }
  }

  return (
    <div className="images">
      {characters
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
