import styles from './LanguageSelector.module.css'

import uk_flag from '../../images/uk_flag.webp'
import geo_flag from '../../images/geo_flag.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const LanguageSelector = () =>{
    const activeLocale = useSelector(state => state.locale.activeLocaleKey)
    const handleLocaleChange = (event) =>{
        // setActiveLocale(event.target.name);
    }
    return (
        <div className={styles['language-selector']}>
            <img className={`${styles.icon} ${activeLocale === 'en' && styles.active} `} src={uk_flag} name ="en" onClick={handleLocaleChange}/>
            <img className={`${styles.icon} ${activeLocale === 'ka' && styles.active} `}  src={geo_flag} name ="ka" onClick={handleLocaleChange} />
        </div>
    )
}
export default LanguageSelector;