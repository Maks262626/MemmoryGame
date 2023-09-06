import './App.scss'
import { useEffect, useState } from 'react';
import GameContext from './context';
import { checkWin, generateCardIds } from './cardLogic';
import StatsTable from './components/StatsTable/StatsTable';
import Game from './components/Game/Game';

function App() {
  const [cardIds, setCardIds] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [move, setMove] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    setCardIds(generateCardIds());
  }, [])
  useEffect(() => {
    if (move !== 0 && move % 2 === 0) {
      const interval = setInterval(() => {
        const firstCardId = selectedCards[0].cardId;
        const secondCardId = selectedCards[1].cardId;
        if (firstCardId !== secondCardId) {
          setCardIds((prevCardIds) => prevCardIds.map(cardItem => {
            if (cardItem.cardId === firstCardId || cardItem.cardId === secondCardId) {
              return { ...cardItem, opened: false }
            }
            return cardItem;
          }));
        }
        clearInterval(interval);
        setSelectedCards([]);
        setIsWin(checkWin(cardIds));
      }, 300);
    }
  }, [move]);

  const cardClick = (card) => {
    if (selectedCards.length < 2) {
      setSelectedCards(prev => [...prev, card]);
      setMove(prev => prev + 1);
    }
  }
  const resetGame = () => {
    setCardIds(generateCardIds());
    setIsStart(false);
    setIsWin(false);
    setMove(0);
    setSelectedCards([]);
    setTime("00:00:00");
  }
  const contextValue = {
    isStart, 
    cardIds, 
    isWin,
    move,
    time,
    selectedCards, 
    setCardIds, 
    setIsStart,
    setTime,
    cardClick,
    resetGame
  }
  return (
    <GameContext.Provider value={contextValue}>
      <div className="wrapper">
        <Game/>
        <StatsTable/>
      </div>
    </GameContext.Provider>

  );
}

export default App
