import Blank from './images/Blank.jpg';
import images from './images/index';
import Completed from './music/Completed.mp3';
import Correct from './music/Correct.mp3';
import GameOver from './music/GameOver.mp3';
import Wrong from './music/Wrong.mp3';
import { useEffect, useState } from 'react';

// Each card has either a true/false found value. If a card is found, it is NOT clickable.
// If it is NOT found, it is clickable, and the images__image--blank class property will change to images__image.
// Two cards will be put into an array and checked. If they have the same name, it's a match.
// Otherwise, they will change back to images__image--blank.
// LET'S GO!!!!

type ImagesProps = {
  gameMusic: HTMLAudioElement;
  handleEndGame: (boolean: boolean) => void;
  calculateScore: () => void;
  score: number;
};

type newCharacterSetType = {
  name: string;
  pic: HTMLImageElement;
  flipped: boolean;
}[];

export default function Images({ gameMusic, handleEndGame, calculateScore, score }: ImagesProps) {
  const [characters, setCharacters] = useState<newCharacterSetType>([]);
  const [totalFlippedCards, setTotalFlippedCards] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number[]>([]);

  useEffect(() => {
    const newCharacterSet = images.sort(() => Math.random() - 0.5);
    newCharacterSet.forEach((character) => (character.flipped = false));
    setCharacters(newCharacterSet);
  }, []); // Will run once on mount

  useEffect(() => {
    checkEndGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalFlippedCards, score]); // Will run every time totalFlippedCards or score state changes

  useEffect(() => {
    if (selectedCardIndex.length === 2) {
      const firstClickedIndex = selectedCardIndex[0];
      const secondClickedIndex = selectedCardIndex[1];
      checkNames(firstClickedIndex, secondClickedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCardIndex]);

  const handleClick = (index: number) => {
    if (score === 0 || selectedCardIndex.length === 2) return;

    const newCharacters = [...characters];
    const clickedCard = newCharacters[index];
    if (!clickedCard.flipped) {
      clickedCard.flipped = true;
      setSelectedCardIndex([...selectedCardIndex, index]);
      setCharacters(newCharacters);
    }
  };

  const checkNames = (firstClickedIndex: number, secondClickedIndex: number) => {
    if (characters[firstClickedIndex].name === characters[secondClickedIndex].name) {
      setTimeout(() => {
        const correct = new Audio(Correct);
        correct.play();
      }, 100);
      setTotalFlippedCards(totalFlippedCards + 2);
      setSelectedCardIndex([]);
    } else {
      setTimeout(() => {
        const wrong = new Audio(Wrong);
        wrong.play();
      }, 100);
      setTimeout(() => {
        const newCharacters = [...characters];
        newCharacters[firstClickedIndex].flipped = false;
        newCharacters[secondClickedIndex].flipped = false;
        setCharacters(newCharacters);
        setSelectedCardIndex([]);
      }, 1000);
      calculateScore();
    }
  };

  const checkEndGame = () => {
    if (totalFlippedCards === 16) {
      gameMusic.volume = 0.5;
      setTimeout(() => {
        const completed = new Audio(Completed);
        completed.play();
      }, 100);
      setTimeout(() => {
        handleEndGame(true);
      }, 4000);
      return;
    }

    if (score === 0) {
      gameMusic.pause();
      setTimeout(() => {
        const gameover = new Audio(GameOver);
        gameover.play();
      }, 100);
      setTimeout(() => {
        handleEndGame(true);
      }, 4000);
      return;
    }
  };

  return (
    <div className="images">
      {characters.map((image, index) => {
        return (
          <button
            key={index}
            className={characters[index].flipped ? 'images__image' : 'images__image images__image--blank'}
            data-name={image.name}
            style={{
              backgroundImage: `url(${characters[index].flipped ? image.pic : Blank})`
            }}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};
