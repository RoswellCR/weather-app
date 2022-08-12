import React, { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo'

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
        <div>
            <WeatherForm onChangeCity={handleChangeCity}/>
            <h1>{weather?.current.temp_c}</h1>
            <WeatherMainInfo weather={weather}/>
        </div>
    )
}