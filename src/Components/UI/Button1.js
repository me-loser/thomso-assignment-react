import styles from './Button1.module.css';
const Button1 = (props) => {
    return <button type="button" className={`${styles.button} ${props.className}`} onClick={props.onClick}>{props.children}</button>
};

export default Button1;