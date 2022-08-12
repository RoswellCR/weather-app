import React, { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo'
import styles from './weatherApp.module.css';
import {TailSpin} from  'react-loader-spinner';

export default function WeatherApp(){
    const [weather,setWeather] = useState(null);
    
    useEffect(()=>{
        loadInfo()
    },[]);

    useEffect(()=>{
        document.title = `weather | ${weather?.location.name ?? ""}`
    },[weather]);

    async function loadInfo(city='berlin'){
        try {
                const request = await fetch(
                    `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
                const json = await request.json();
                console.log(json);
                setWeather(json)
        } catch (error) {
            
        }
    }

    function handleChangeCity(city){
        setWeather(null)
        loadInfo(city);
    }

    return(
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ?
             <WeatherMainInfo weather={weather}/> 
             : <TailSpin color="#00BFFF" height={80} width={80}/>}
        </div>
    )
}