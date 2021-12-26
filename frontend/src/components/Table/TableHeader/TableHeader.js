import TableFilter from './TableFilter';
import styles from './TableHeader.module.css'
import TableSearch from './TableSearch';
const TableHeader = ()=>{
    return (
        <div className={styles.header}>
            <TableSearch />
            <div className={styles.title}>Dashboard</div>
            <TableFilter />
        </div>
    )
}
export default TableHeader;