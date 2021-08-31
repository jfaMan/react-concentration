import React, { useEffect, useState } from 'react';
import images from './images/index';
import Correct from './music/Correct.mp3';
import Wrong from './music/Wrong.mp3';
import Completed from './music/Completed.mp3';
import GameOver from './music/GameOver.mp3';
import Blank from './images/Blank.jpg';


// Each card has either a true/false found value. If a card is found, it is NOT clickable.
// If it is NOT found, it is clickable, and the image-blank class property will change to image.
// Two cards will be put into an array and checked. If they have the same name, it's a match.
// Otherwise, they will change back to image-blank.
// LET'S GO!!!!

const Images = (props) => {
  const { gameMusic, handleEndGame, calculateScore, score } = props;
  const [ characters, setCharacters ] = useState([])
  const [ totalFlippedCards, setTotalFlippedCards ] = useState(0);
  const [ selectedCardIndex, setSelectedCardIndex ] = useState([]);

  useEffect(() => {
    const newCharacterSet = images.sort(() => Math.random() - 0.5)
    newCharacterSet.forEach(character => character.flipped = false)
    setCharacters(newCharacterSet)
  }, []) // Will run once on mount

  useEffect(() => {
    checkEndGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalFlippedCards]) // Will run every time totalFlippedCards state changes

  useEffect(() => {
    checkEndGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  useEffect(() => {
    if (selectedCardIndex.length === 2) {
      const firstClickedIndex = selectedCardIndex[0]
      const secondClickedIndex = selectedCardIndex[1]
      checkNames(firstClickedIndex, secondClickedIndex)
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCardIndex])

  const handleClick = (index) => {
    const newCharacters = [...characters]
    const clickedCard = newCharacters[index]
    if (!clickedCard.flipped) {
      clickedCard.flipped = true;
      setSelectedCardIndex([...selectedCardIndex, index])
      setCharacters(newCharacters)
    }
  }

  // DOM METHOD FOR ABOVE
  // const nextCard = event.target
  // if (nextCard.getAttribute("found") === "true") {
  //   return;
  // } else {
  //   nextCard.classList.remove('image-blank')
  //   nextCard.setAttribute("found", "true")
  //   setSelectedCardIndex([...selectedCardIndex, nextCard])
  // }
  
  const checkNames = (firstClickedIndex, secondClickedIndex) => {
    if (characters[firstClickedIndex].name === characters[secondClickedIndex].name) {
      setTimeout(() => {
        const correct = new Audio(Correct);
        correct.play();
      }, 100)
      setTotalFlippedCards(totalFlippedCards + 2)
    } else {
      setTimeout(() => {
        const wrong = new Audio(Wrong);
        wrong.play();
      }, 100)
      setTimeout(() => {
        const newCharacters = [...characters]
        newCharacters[firstClickedIndex].flipped = false
        newCharacters[secondClickedIndex].flipped = false
        setCharacters(newCharacters)
      }, 1000)
      calculateScore()
    }
    setSelectedCardIndex([])
  }

  // DOM METHOD FOR ABOVE
  // const checkNames = (card1, card2) => {
  //   if (card1.getAttribute("name") === card2.getAttribute("name")) {
  //     setTimeout(() => {
  //       const correct = new Audio(Correct);
  //       correct.play();
  //     }, 100)
  //     setTotalFlippedCards(totalFlippedCards + 2)
  //   } else {
  //     setTimeout(() => {
  //       const wrong = new Audio(Wrong);
  //       wrong.play();
  //     }, 100)
  //     setTimeout(() => {
  //       card1.setAttribute("found", "false")
  //       card2.setAttribute("found", "false")
  //       card1.classList.add('image-blank')
  //       card2.classList.add('image-blank')
  //     }, 1000)
  //     calculateScore()
  //   }
  //   setSelectedCardIndex([])
  // }
  
  const checkEndGame = () => {
    if (totalFlippedCards === 16 ) {
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
    }
  }

  return (
    <div className="images">
      {characters
        .map((image, index) => {
          return (
            <div
              className={characters[index].flipped ? 'image' : 'image-blank'}
              name={image.name}
              style={{ backgroundImage: `url(${characters[index].flipped ? image.pic : Blank})` }}
              onClick={score === 0 || selectedCardIndex.length === 2 ? null : () => handleClick(index)}
            />
          )
        })
      }
    </div>
  )
}

export default Images;
