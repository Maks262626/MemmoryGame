import s from './Btn.module.scss';
const Btn = ({text,handleClick}) => {
    return (
      <button onClick={handleClick} className={s.btn}>{text}</button>
    );
}
 
export default Btn;