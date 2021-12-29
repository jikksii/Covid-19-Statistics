import { useSelector } from 'react-redux';
import styles from './Table.module.css'
import TableHeader from './TableHeader/TableHeader';
const Table = (props) =>{
    const activeLocale = useSelector(state => state.locale.activeLocaleKey)
    const {list,onSortChange,onSearchQueryChange} = props;
    const rows = list.map((element,index) => {
        return (
            <tr key={index}>
                <td>{element.country.name[activeLocale]}</td>
                <td>{element.recovered}</td>
                <td>{element.death}</td>
                <td>{element.confirmed}</td>
            </tr>
        )
    })

    return <div className={styles.table}>
        <TableHeader onSortChange = {onSortChange} onSearchQueryChange = {onSearchQueryChange}/>
        <table>
            <tbody>
                <tr className={styles.columns}>
                    <th>Country</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Confirmed</th>
                </tr>
               {rows}
            </tbody>
            
        </table>
    </div>
}
export default Table;