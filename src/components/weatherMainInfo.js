import styles from './weatherMainInfo.module.css';

export default function WeatherMainInfo({weather}){
    return (
        <div className={styles.mainInfo}>
            <div className={styles.city}>{weather?.location.name}</div>
            <div className={styles.country}>{weather?.location.country}</div>
            <div className={styles.row}>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`} 
                        width="128" 
                        alt="forecast icon" />
                </div>
                <div className={styles.weatherConditions}>
                    <div className={styles.condition}>{weather?.current.condition.text}</div>
                    <div className={styles.current}>{weather?.current.temp_c}º</div>
                </div>
                
            </div>
            <iframe 
                src={`https://maps.google.com/maps?q=${weather?.location.lat},${weather?.location.lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title='map location'>
            </iframe>
        </div>
    )
}