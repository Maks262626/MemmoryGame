import { useContext, useEffect} from "react";
import GameContext from "../../context";
import { addData, getData} from "../../data";
import s from './StatsTable.module.scss';
const StatsTable = () => {
    const { isWin,move,time,cardIds } = useContext(GameContext);
    const data = getData();
    const pairsCount = cardIds.length/2;
    useEffect(()=>{
        if(isWin){
            addData(pairsCount,move/2,time);
        }
    },[time])
    return (
        <div className={s.statsTable}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cards</th>
                        <th>Matches</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row =>{
                        return(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.cards}</td>
                            <td>{row.matches}</td>
                            <td>{row.time}</td>
                        </tr>
                        );
                    })}
                </tbody>
                
            </table>
        </div>
    );
}
export default StatsTable;