import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';
import useHttp from '../../hooks/use-http';
import styles from './DashboardPage.module.css'
const DashboardPage = () =>{

    const [summary,setSummary] = useState(null);
    const [tableData,setTableData] = useState([]);


    const handleError = useCallback(() => {
        
    },[]);

    const hadnleFetchSummary = useCallback(
        (data) =>{
        setSummary(data.data);
    },
    []);

    const {
        sendRequest: fetchSummary,
        isLoading  : isFetchingSummary
    } = useHttp(hadnleFetchSummary,handleError)


    const handleFetchAll = useCallback(
        (data) =>{
            setTableData(data.data)
    },
    []);

    const {
        sendRequest: fetchAll,
        isLoading  : isFetchingAll
    } = useHttp(handleFetchAll,handleError)



    useEffect(() => {
        fetchSummary({
            url : "/statistic/summary",
        })
        fetchAll({
            url:'/statistic/all'
        })
        
    },[fetchSummary,fetchAll])


    return <div className={styles.dashboard}>
        <Table list = {tableData}/>
        <div className={styles['card-list']}>
            <Card>
                <h2 className={styles['card-title']}>Death</h2>
                <div className={styles['card-number']}>
                    {isFetchingSummary && <Spinner />}
                    {!isFetchingSummary && summary &&  summary.death}
                </div>
            </Card>
            <Card>
                <h2 className={styles['card-title']}>Recoveries</h2>
                <div className={styles['card-number']}>
                    {isFetchingSummary && <Spinner />}
                    {!isFetchingSummary && summary && summary.recovered}
                </div>
            </Card>
            <Card>
                <h2 className={styles['card-title']}>Confirmeds</h2>
                <div className={styles['card-number']}>
                    {isFetchingSummary && <Spinner />}
                    {!isFetchingSummary && summary &&  summary.confirmed}
                </div>
            </Card>
        </div>
    </div>
}
export default DashboardPage;