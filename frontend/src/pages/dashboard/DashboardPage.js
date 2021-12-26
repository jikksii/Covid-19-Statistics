import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import styles from './DashboardPage.module.css'
const DashboardPage = () =>{
    return <div className={styles.dashboard}>
        <Table/>
        <div className={styles['card-list']}>
            <Card>
                <h2 className={styles['card-title']}>Death</h2>
                <div className={styles['card-number']}>
                    25596
                </div>
            </Card>
            <Card>
                <h2 className={styles['card-title']}>Recoveries</h2>
                <div className={styles['card-number']}>
                    25596
                </div>
            </Card>
            <Card>
                <h2 className={styles['card-title']}>Confirmeds</h2>
                <div className={styles['card-number']}>
                    25596
                </div>
            </Card>
        </div>
    </div>
}
export default DashboardPage;