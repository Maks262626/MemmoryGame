import { useContext } from 'react';
import s from './WinStats.module.scss';
import GameContext from '../../context';
import Btn from '../Btn/Btn';
const WinStats = () => {
    const {isWin,move,time,resetGame} = useContext(GameContext);
    return (
        <div className={`${s.winStats} ${isWin && s.active}`}>
            <div className={s.winStats__info}>
                <h1>Your Stats:</h1>
                <h2>Matches: {move / 2}</h2>
                <h2>Time: {time}</h2>
                <Btn handleClick={resetGame} text="RESET"/>
            </div>
        </div>
    );
}
export default WinStats;