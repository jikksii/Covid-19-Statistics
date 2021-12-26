import Table from '../../components/Table/Table';
import styles from './DashboardPage.module.css'
const DashboardPage = () =>{
    return <div className={styles.dashboard}>
        <Table/>
        <div className='cards'>Cards</div>
    </div>
}
export default DashboardPage;