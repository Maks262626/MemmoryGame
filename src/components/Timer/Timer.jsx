import { useState, useEffect, useContext } from 'react';
import GameContext from "../../context";
import s from './Timer.module.scss';
const Timer = () => {
  const {isWin,setTime} = useContext(GameContext);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if(!isWin){
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }else if(isWin && seconds!==0){
      setTime(formatTime(seconds));
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isWin,seconds]);
  
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className={s.timer}>
      <p>Timer: {formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
