import styles from './Input.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Input = ({type,icon,onChange : onChangeHandler , placeholder : inputPlaceHolder , className : className}) => {


    let input = <input className={styles.input} type={"text"}  onChange={onChangeHandler}  placeholder={inputPlaceHolder} />
    if(type){
        input = <input className={styles.input} type={type}  onChange={onChangeHandler} placeholder={inputPlaceHolder} />
    }
    let iconComponent = null
    if(icon){
        iconComponent = <div className={styles['icon-container']}><FontAwesomeIcon icon={icon}/></div>
    }
    return (
        <div className={`${styles['input-container']} ${className}`}>
            {input}
            {iconComponent}
        </div>
    )
}
export default Input;