import styles from './TableSearch.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
const TableSearch = ()=>{
    const [searchTerm,setSearchTerm] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchTerm)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    },[searchTerm])


    return <div className={styles.search}>
        <input className={styles.input} type={"text"} placeholder='Search' onChange={(event) => setSearchTerm(event.target.value)}/>
        <div><FontAwesomeIcon icon={faSearch}/></div>
    </div>
}
export default TableSearch;