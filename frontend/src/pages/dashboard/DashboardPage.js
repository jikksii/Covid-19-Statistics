import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Table from '../../components/Table/Table';
import useHttp from '../../hooks/use-http';
import styles from './DashboardPage.module.css'
const DashboardPage = () =>{

    const [summary,setSummary] = useState(null);
    const [tableData,setTableData] = useState([]);

    const [sortColumn,setSortColumn] = useState(null);
    const [sortDirection,setSortDirection] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const literals = useSelector(state => state.locale.activeLiterals)

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



    const sortChangeHandler =  (sortColumn,sortDirection)=>{

        setSortColumn(sortColumn);
        setSortDirection(sortDirection);
    }


    useEffect(()=>{
        fetchAll({
            url: '/statistic/all',
            data: {
                sortColumn,
                sortDirection,
                searchTerm
            }
        }).then(r => {})
    },[fetchAll,sortColumn,sortDirection,searchTerm])

    useEffect(() =>{
        fetchSummary({
            url: "/statistic/summary",
        }).then(r => {
            
        })
    },[fetchSummary])

    const searchQueryChangeHandler = useCallback((query) => {
        setSearchTerm(query)

    },[]);


    return <div className={styles.dashboard}>
        <Table
            list = {tableData}
            onSortChange = {sortChangeHandler}
            onSearchQueryChange = {searchQueryChangeHandler}
            loading = {isFetchingAll}
        />
        <div className={styles['card-list']}>
            <Card>
                <h2 className={styles['card-title']}>{literals.death}</h2>
                <div className={styles['card-number']}>
                    {isFetchingSummary && <Spinner />}
                    {!isFetchingSummary && summary &&  summary.death}
                </div>
            </Card>
            <Card>
                <h2 className={styles['card-title']}>{literals.recovered}</h2>
                <div className={styles['card-number']}>
                    {isFetchingSummary && <Spinner />}
                    {!isFetchingSummary && summary && summary.recovered}
                </div>
            </Card>
            <Card>
                <h2 className={styles['card-title']}>{literals.confirmed}</h2>
                <div className={styles['card-number']}>
                    {isFetchingSummary && <Spinner />}
                    {!isFetchingSummary && summary &&  summary.confirmed}
                </div>
            </Card>
        </div>
    </div>
}
export default DashboardPage;
