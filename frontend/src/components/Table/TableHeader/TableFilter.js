import styles from "./TableFilter.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


const columnsArray = [ "death","confirmed","recovered"];
const orderArray = ["asc","desc"];


const TableFilter = () =>{
    const [active,setActive] = useState(false);
    const [activeColumn,setActiveColumn] = useState(null);
    const [activeOrder,setActiveOrder] = useState(null);


    const handleColumnChange = event =>{
        if(event.target.checked){
            setActiveColumn(event.target.name)
        }else{
            setActiveColumn(null)
        }
    }

    const handleOrderChange = event =>{
        if(event.target.checked){
            setActiveOrder(event.target.name)
        }else{
            setActiveOrder(null)
        }
    }



    const columns = columnsArray.map((value,index) => {
        return <div key={index}>
                    <input 
                        className={styles.checkbox} 
                        type="checkbox" 
                        id={value} 
                        name={value} 
                        onChange={handleColumnChange}
                        checked = {value === activeColumn}
                    />
                    <label htmlFor={value}>{value}</label>
                </div>
    })
    return (
        <div className={styles.filter}>
            <div><FontAwesomeIcon onClick={() => setActive(!active)} className={`${styles.icon} ${active && styles.active}`} icon={faFilter}/></div>
            {active && <div className={styles.list}>
                <p>Columns</p>
                {columns}
                <p>Order</p>
                <div className={styles['list-order']}>
                    <div>
                        <input className={styles.checkbox} 
                        type="checkbox" 
                        id="asc" 
                        name="asc" 
                        onChange={handleOrderChange}
                        checked ={activeOrder === "asc"}
                    />
                        <label htmlFor="horns">Ascending</label>
                    </div>
                    <div>
                        <input 
                            className={styles.checkbox} 
                            type="checkbox" 
                            id="desc" 
                            name="desc" 
                            onChange={handleOrderChange}
                            checked ={activeOrder === "desc"}
                        />
                        <label htmlFor="horns">Descending</label>
                    </div>
                </div>
                
            </div>}
        </div>
    )
}
export default TableFilter;