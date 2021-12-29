import styles from './TableSearch.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const TableSearch = ({onSearchQueryChange})=>{
    const [searchTerm,setSearchTerm] = useState('');
    const literals = useSelector(state => state.locale.activeLiterals)

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onSearchQueryChange(searchTerm)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    },[searchTerm,onSearchQueryChange])


    return <div className={styles.search}>
        <input className={styles.input} type={"text"} placeholder={literals.search} onChange={(event) => setSearchTerm(event.target.value)}/>
        <div><FontAwesomeIcon icon={faSearch}/></div>
    </div>
}
export default TableSearch;