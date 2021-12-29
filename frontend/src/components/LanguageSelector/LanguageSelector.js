import styles from './LanguageSelector.module.css'

import uk_flag from '../../images/uk_flag.webp'
import geo_flag from '../../images/geo_flag.png'
import { useDispatch, useSelector } from 'react-redux'
import { localeActions } from '../../store/locale'
const LanguageSelector = () =>{
    const activeLocale = useSelector(state => state.locale.activeLocaleKey)
    const dispatch = useDispatch();
    const handleLocaleChange = (event) =>{
        dispatch(localeActions.setActiveLocale(event.target.name))
        dispatch(localeActions.setActiveLiterals(event.target.name))
    }
    return (
        <div className={styles['language-selector']}>
            <img alt='en' className={`${styles.icon} ${activeLocale === 'en' && styles.active} `} src={uk_flag} name ="en" onClick={handleLocaleChange}/>
            <img alt='ka' className={`${styles.icon} ${activeLocale === 'ka' && styles.active} `}  src={geo_flag} name ="ka" onClick={handleLocaleChange} />
        </div>
    )
}
export default LanguageSelector;