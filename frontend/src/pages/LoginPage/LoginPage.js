import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import styles from './LoginPage.module.css'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
const LoginPage = (props)=>{
    return <div className={styles['login-page']}>
        <div className={styles['login-card']}>
            <div className={styles['login-card-header']}>
                <h1>Covid 19 statistics</h1>
            </div>
            <div className={styles['error-message']}>
                მომხმარებლის სახელი ან პაროლი არასწორია.
            </div>
            <Input className={styles['login-input']} type={"text"} icon={faUser} onChange={(event)=>console.log(event.target.value)} placeholder={"Username"}/>
            <Input className={styles['login-input']} type={"Password"} icon={faKey} onChange={(event)=>console.log(event.target.value)} placeholder={"Password"}/>
            <div className={styles['login-action-container']}>
                <button className={`${styles['register-button']} ${styles['button']} `}>Create new account</button>
                <button className={`${styles['login-button']} ${styles['button']} `}>Log in</button>
            </div>
        </div>
    </div>
}
export default LoginPage;