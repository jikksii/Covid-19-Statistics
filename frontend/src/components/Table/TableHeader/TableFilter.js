import styles from "./TableFilter.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
const TableFilter = () =>{
    return (
        <div className={styles.filter}>
            <div><FontAwesomeIcon className={styles.icon} icon={faFilter}/></div>
        </div>
    )
}
export default TableFilter;