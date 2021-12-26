import styles from './Table.module.css'
import TableHeader from './TableHeader/TableHeader';
const Table = () =>{
    return <div className={styles.table}>
        <TableHeader/>
    </div>
}
export default Table;