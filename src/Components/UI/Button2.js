import style from './Button2.module.css';
const Button2 = (props) =>{
    return <button type="button" className={`${style.button} ${props.className}`}>{props.children}</button>
}
export default Button2;