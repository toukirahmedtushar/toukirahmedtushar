import React, { useEffect, useRef, useState } from 'react'
import search_icon from '../assets/search.png';
import humidity from '../assets/humidity-re.png';
import wind from '../assets/wind-re.png';


function Weather() {

    const inputref= useRef()
    const[weatherData, setWeatherData]= useState(false);
    const[Message, setMessage]= useState('');
    const pic = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
    
    const search= async (city)=>{
        if(city === ''){
            setMessage(`Enter City Name`); 
            return;
        };
        const key = '6f44027f6bcd5d3fb6217b791c45cdb7';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setMessage(false);
            setWeatherData({
                temp: Math.round(data.main.temp),
                humidity: data.main.humidity,
                city: data.name,
                wind: data.wind.speed,
                icon: data.weather[0].icon,
                weather: data.weather[0].description,
                feels: data.main.feels_like,
               
            });
        } catch (error) {
           setWeatherData(false);
           setMessage(`Didn't find the city ${city}.Enter Valid City Name`)
        
        } 
    }

    function handleInputKeyDown (e) {
        if (e.key === "Enter") {
            search(e.target.value)
        }
    }
    
    useEffect(()=>{
        search('')
    },[]);
    
  return (
    <>
     <div className='w-full'>
        <div className='flex-col justify-center p-6 mx-auto mt-16 text-white w-80 weather bg-sky-500'>
            <div>
                <p className='flex flex-wrap mb-3 text-xl text-red-600'>{Message}</p>
            </div>
            <div className='flex justify-between gap-2 search-bar'>
                <input ref={inputref} onKeyDown={handleInputKeyDown} className='px-1 text-black rounded-md' type='text' placeholder='search'/>
                <button onClick={()=>search(inputref.current.value)} className=''><img className='w-12 h-12 p-2 bg-white bg-center rounded-3xl' src={search_icon} alt='search'/></button>
            </div>
            {weatherData ? <>
                <div className='flex-col items-center justify-center gap-4 text-center align-middle cloud'>
                <img className='w-32 mx-auto' src={pic} alt='weather'/>
                <p className='text-2xl text-slate-700'>{weatherData.weather}</p>
                <h1 className='mt-3 text-6xl Tempareture'>{weatherData.temp}°C</h1>
                <h4 className='text-orange-200 Tempareture'>Feels Like- {weatherData.feels}°C</h4>
                <p className='mt-2 text-3xl capitalize city'>{weatherData.city}</p> 
            </div>
            <div className='flex justify-center gap-4 mt-4'>
                <div className='flex justify-center humidity basis-1/2'>
                    <img className='text-white w-14 h-14' src={humidity} alt='humidity'></img>
                    <div className='flex-col text-center '>
                        <h4 className='inline-block my-auto text-lg align-text-bottom'>{weatherData.humidity}%</h4>
                        <p className='text-sm'>humidity</p>
                    </div>
                </div>
                <div className='flex justify-center wind basis-1/2'>
                    <img className='w-12 h-12' src={wind} alt='wind'></img>
                    <div className='flex-col '>
                        <h4 className='my-auto text-lg'>{weatherData.wind} km/h</h4>
                        <p className='text-sm'>Wind Speed</p>
                    </div>
                </div>
            </div>
            
            </>:<> <p className='mt-6 text-4xl text-center text-shadow-2xl text-lime-400 '>Welcome <br/>Weather App</p>
             </>
             }
            
        </div>
     </div>
    </>
  )
}

export default Weather
