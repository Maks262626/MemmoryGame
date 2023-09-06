import { useContext } from "react";
import Card from "../Card/Card";
import GameContext from "../../context";
import Btn from "../Btn/Btn";
import Timer from "../Timer/Timer";
import RangeSlider from "../RangeSlider/RangeSlider";
import WinStats from "../WinStats/WinStats";
import s from './Game.module.scss';
const Game = () => {
    const { isStart, cardIds,setIsStart} = useContext(GameContext);
    return (
        <div className={s.game}>
          <div className={s.game__header}>
            <div className={s.game__title}>
              <h1>Memory Game</h1>
            </div>
            <div className={s.game__start}>
                {isStart 
                ? 
                <Timer/>
                :
                <>
                    <Btn handleClick={() => { setIsStart(true) }} text="start"/>
                    <RangeSlider/>
                </>}
            </div>
          </div>
          <div className={s.game__field}>
            <div className={s.cards}>
                {cardIds.map((card) => (
                  <Card key={card.id} card={card}/>
                ))}
            </div>
            <WinStats/>
          </div>
        </div>
    );
}
 
export default Game;