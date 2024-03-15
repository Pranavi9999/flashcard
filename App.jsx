import React, { useState } from 'react';
import './App.css';

function FlashcardApp() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const cardPairs = [
    { question: 'What is the largest mammal?', answer: 'Blue Whale' },
    { question: 'What is the fastest land animal?', answer: 'Cheetah' },
    { question: 'What is the only mammal capable of sustained flight?', answer: 'Bat' },
    { question: 'What is the fastest bird on land?', answer: 'Ostrich'}
    // Add more card pairs as needed
  ];

  const totalCards = cardPairs.length;
  const currentCard = cardPairs[currentCardIndex];

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
    setUserGuess('');
    setFeedback('');
  };

  const handlePrevCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
    setUserGuess('');
    setFeedback('');
  };

  const handleSubmit = () => {
    if (userGuess.toLowerCase() === currentCard.answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  const handleFlipCard = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <div className="flashcard-container">
      <div className="content">
        <h1>Animal Flashcards</h1>
        <p>Learn interesting facts about different animals!</p>
        <div className="total-cards">
          Total Cards: {totalCards}
        </div>
        <div className="flashcard" onClick={handleFlipCard}>
          {showAnswer ? (
            <div className="flashcard-answer">
              {currentCard.answer}
            </div>
          ) : (
            <div className="flashcard-question">
              {currentCard.question}
            </div>
          )}
        </div>
        {!showAnswer && (
          <div>
            <input 
              type="text" 
              placeholder="Enter your guess" 
              value={userGuess} 
              onChange={(e) => setUserGuess(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>
            <div>{feedback}</div>
          </div>
        )}
        <div className="button-container">
          <button onClick={handlePrevCard}>Previous Card</button>
          <button onClick={handleNextCard}>Next Card</button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardApp;
