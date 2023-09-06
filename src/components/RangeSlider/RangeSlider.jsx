import { useContext, useState } from 'react';
import { generateCardIds, setCardCount } from '../../cardLogic';
import GameContext from '../../context';
import s from './RangeSlider.module.scss';
import Btn from '../Btn/Btn';
const RangeSlider = () => {
  const [value, setValue] = useState(3);
  const {setCardIds} = useContext(GameContext);
  const handleClick = () => {
    setCardCount(value);
    setCardIds(generateCardIds());
  };
  const handleCardChange = (event) =>{
    setValue(event.target.value);
  }
  return (
    <div className={s.range}>
      <label htmlFor="volume">Cards count:</label>
      <input
        type="range"
        id="volume"
        name="volume"
        min="3"
        max="16"
        value={value}
        onChange={handleCardChange}
      />
      <Btn handleClick={handleClick} text={`Set card: ${value}`}/>
    </div>
  );
};

export default RangeSlider;
