import styles from './Button2.module.css';
const Button2 = (props) =>{
    return <button type="button" className={`${styles.button} ${props.className}`}
    onClick={props.onClick}>{props.children}</button>
}
export default Button2;