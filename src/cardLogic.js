export let cardCount = 3;
export let cardOpenedDelay = 1500;

export const getCardCount = () =>{
    return cardCount;
}
export const setCardCount = (value) =>{
    cardCount = value;
}
const shuffleArray = (arr) => {
    return arr.slice().sort(() => Math.random() - 0.5);
}
export const generateCardIds = () => {
    let arr = [];
    for (let i = 1;i <= cardCount; i++) {
        arr.push({ cardId: i, opened: false, id: i*2-1 });
        arr.push({ cardId: i, opened: false, id: i*2 });
    }
    return shuffleArray(arr);
}
export const checkWin = (cardIds) => {
    return cardIds.every(cardItem => cardItem.opened);
}