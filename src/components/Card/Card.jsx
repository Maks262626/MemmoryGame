import { useContext, useEffect } from "react";
import GameContext from "../../context";
import s from './Card.module.scss';
import { cardOpenedDelay } from "../../cardLogic";
const Card = ({ card }) => {
    const { isStart, setCardIds, selectedCards,cardClick } = useContext(GameContext);
    useEffect(() => {
        if (isStart) {
            setCardIds(prev => prev.map(cardItem => {
                return {...cardItem,opened:true}
            }));
            setTimeout(() => {
                setCardIds(prev => prev.map(cardItem => {
                    return {...cardItem,opened:false}
                }));
            }, cardOpenedDelay)
        }
    }, [isStart]);

    const handleClick = (card) => {
        if (isStart && selectedCards.length < 2) {
            setCardIds(prev => prev.map(cardItem =>{
                if(cardItem.id === card.id){
                    return {...cardItem,opened: true}
                }
                return cardItem;
            }));
        }
        if (!card.opened && isStart) {
            cardClick(card);
        }
    }

    return (
        <div className={`${s.card} ${card.opened && s.active}`} onClick={() => handleClick(card)}>
            <div className={s.card__inner}>
                <div className={s.card__front}>
                    <img src={`/icons/${card.cardId}.svg`} alt="icon" />
                </div>
                <div className={s.card__back}></div>
            </div>
        </div>
    )
}
export default Card;