import styles from './Header.module.css'
const Header = () =>{
    return <header className={styles.header}>
        <div className={styles['text-box']}>
            <h1 className={styles['heading-primary']}>
                <span className={styles['heading-primary-main']}>Covid 19</span>
                <span className={styles['heading-primary-sub']}>Statistics</span>
            </h1>
        </div>
    </header>
}
export default Header;