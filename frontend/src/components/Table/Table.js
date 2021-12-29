import { useSelector } from 'react-redux';
import styles from './Table.module.css'
import TableHeader from './TableHeader/TableHeader';
import Spinner from '../Spinner/Spinner'
const Table = (props) =>{
    const activeLocale = useSelector(state => state.locale.activeLocaleKey)
    const {list,onSortChange,onSearchQueryChange, loading} = props;

    const literals = useSelector(state => state.locale.activeLiterals)
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
        {loading && <Spinner />}
        {!loading && <table>
            <tbody>
                <tr className={styles.columns}>
                    <th>{literals.country}</th>
                    <th>{literals.recovered}</th>
                    <th>{literals.death}</th>
                    <th>{literals.confirmed}</th>
                </tr>
                
                {rows}
            </tbody>
            
        </table>}
    </div>
}
export default Table;