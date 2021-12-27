import Input from '../../components/Input/Input';
import styles from './LoginPage.module.css'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {authActions} from '../../store/auth'
const LoginPage = (props)=>{
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState('Username or password is incorrect');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    useEffect(() => {
        if(isAuth){
            navigate('/')
        }
    },[isAuth])

    const handleSuccessAuth = data =>{
        dispatch(authActions.setAuth(true))
        dispatch(authActions.setToken(data.token))
    }

    const handleError = (error) => {
        setError(true);
    }

    
    const {sendRequest: login} = 
    useHttp({
        method : 'POST',
        url : "/sss",
        data : {
            username: username,
            password : password
        }
    },handleSuccessAuth,handleError)

    const {
        sendRequest: register
    } = useHttp({
        method : 'POST',
        url : "/test",
        data : {
            username: username,
            password : password
        }
    },handleSuccessAuth,handleError)



    const passwordChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const usernameChangeHandler = (event) =>{
        setUsername(event.target.value)
    }

    const loginClickHandler = ()=>{
        setError(false);
        login();
    }

    const registerClickHandler = () => {
        setError(false);
        register();
    }

    return <div className={styles['login-page']}>
        <div className={styles['login-card']}>
            <div className={styles['login-card-header']}>
                <h1>Covid 19 statistics</h1>
            </div>
            {error && <div className={styles['error-message']}>
                {errorMessage}
            </div>}
            <Input 
                className={styles['login-input']} 
                type={"text"} 
                icon={faUser} 
                onChange={usernameChangeHandler} 
                placeholder={"Username"}
                value = {username}
            />
            <Input 
                className={styles['login-input']} 
                type={"Password"} 
                icon={faKey} 
                onChange={passwordChangeHandler} 
                placeholder={"Password"}
                value = {password}
            />
            <div className={styles['login-action-container']}>
                <button className={`${styles['register-button']} ${styles['button']}`} onClick={registerClickHandler}>Create new account</button>
                <button className={`${styles['login-button']} ${styles['button']} `} onClick={loginClickHandler}>Log in</button>
            </div>
        </div>
    </div>
}
export default LoginPage;