import React, { useState } from 'react'
import axios from 'axios'
import './weather.css'
const APIKey = 'DgQ2etuYOziOTqAd4fd9kJptXeYTfL3b'

function Weather(){
    const[city,setCity]=useState("")
    const[weatherdata,setWeatherdata]=useState(null)
    const[error,setError]=useState(null)


    const handleSubmit=async()=>{
        try{
            const resopnse=await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${APIKey}`);
            //(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&&apikey=${APIKey}`);
        setWeatherdata(resopnse.data)
        setError(null)
        }
        catch(error){
        setError('Failed to feacth the weather data');
        setWeatherdata(null);
        }
    };
    //console.log(weatherdata)
    // console.log(error)
     return(
        <>
        <div className="container">
            <h1 className="title">Search Weather Condition</h1>
            <div className="inputContainer">
            <input type='text' placeholder='Enter City Name' className='input' onChange={(e)=>setCity(e.target.value)}/>
            <button className='button' onClick={handleSubmit}>Search</button>
            </div>
            {error&&<p className='error'>{error}</p>}
            {weatherdata&&(
                <div className='weatherContainer'>
                    <h2 className='subtitle'>{weatherdata.location.name}</h2>
                    <p className='temperature'>Temperature:{weatherdata.data.values.temperature}<sup>o</sup></p>
                    <p className='humidity'>Humidity:{weatherdata.data.values.humidity}%</p>
                    <p className='windspeed'>Wind Speed:{weatherdata.data.values.WindSpeed}mph</p>
                </div>
            )}
        </div>
        </>
     )
}
export default Weather;