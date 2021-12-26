import styles from './Table.module.css'
import TableHeader from './TableHeader/TableHeader';
const Table = () =>{

    let list = [
        {
            country : "Georgia",
            recovered : 18,
            death : 1,
            confirmed : 10
        },
        {
            country : "Georgia",
            recovered : 18,
            death : 1,
            confirmed : 10
        },
        {
            country : "Georgia",
            recovered : 18,
            death : 1,
            confirmed : 10
        },
        {
            country : "Georgia",
            recovered : 18,
            death : 1,
            confirmed : 10
        },
        {
            country : "Georgia",
            recovered : 18,
            death : 1,
            confirmed : 10
        },
        {
            country : "Georgia",
            recovered : 18,
            death : 1,
            confirmed : 10
        }
    ]

    const rows = list.map((element,index) => {
        return (
            <tr key={index}>
                <td>{element.country}</td>
                <td>{element.recovered}</td>
                <td>{element.death}</td>
                <td>{element.confirmed}</td>
            </tr>
        )
    })

    return <div className={styles.table}>
        <TableHeader/>
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