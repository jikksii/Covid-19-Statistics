import styles from './TableSearch.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const TableSearch = ()=>{
    return <div className={styles.search}>
        <input className={styles.input} type={"text"} placeholder='Search'/>
        <div><FontAwesomeIcon icon={faSearch}/></div>
    </div>
}
export default TableSearch;