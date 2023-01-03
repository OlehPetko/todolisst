import styles from './Button.module.css'

const Button = ( {children, callBack} ) => {
    return (
        <button className={styles.button} onClick={callBack}>
            {children}
        </button>
    )
}
export default Button