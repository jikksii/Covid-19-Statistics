import TableFilter from './TableFilter';
import styles from './TableHeader.module.css'
import TableSearch from './TableSearch';
const TableHeader = (props)=>{

    const {onSortChange,onSearchQueryChange} = props
    

    return (
        <div className={styles.header}>
            <TableSearch onSearchQueryChange = {onSearchQueryChange}/>
            <TableFilter onSortChange = {onSortChange}/>
        </div>
    )
}
export default TableHeader;