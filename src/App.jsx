import React, { useEffect, useState } from 'react';

const API_KEY = 'ec48888312712eacfd3d4980ce689a53';

const App = () => {
    const [input, setInput] = useState('London'); // Default city
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        if (!input) return;
        try {
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`;
            const response = await fetch(API);
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.message || "City not found");
            }
            
            setData(result);
            setError(null);
        } catch (error) {
            setData(null);
            setError(error.message);
        }
    };

    // Fetch default city on mount
    useEffect(() => {
        fetchData();
    }, []);

    const getWeatherIcon = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const formatDateTime = (dt) => {
        const date = new Date(dt * 1000);
        return {
            day: date.toLocaleDateString('en-US', { weekday: 'long' }),
            date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' }),
            time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
    };

    return (
        <div className='container'>
            <div className='weather-layout'>
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder='Enter city...' 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={(e) => e.key === 'Enter' && fetchData()}
                    />
                    <button onClick={fetchData}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}

                {data && (
                    <div className='weather-data'>
                        <img 
                            className='weather-icon' 
                            src={getWeatherIcon(data.weather[0].icon)} 
                            alt={data.weather[0].description} 
                        />
                        <h1 className='weather-temp'>{Math.round(data.main.temp)}°C</h1>
                        <p className='weather-city'>{data.name}</p>
                        <li className='weather-info'>{formatDateTime(data.dt).date}</li>
                        <li className='weather-info'>
                            {formatDateTime(data.dt).day}: <span>{formatDateTime(data.dt).time}</span>
                        </li>
                    </div>
                )}
            </div>

            <div className="weather-Extra">
                {data ? (
                    <>
                        <h1>Today</h1>
                        <div className='container2'>
                            <div>
                                <span>Wind</span>
                                <p>{data.wind.speed} m/s</p>
                            </div>
                            <div>
                                <span>Humidity</span>
                                <p>{data.main.humidity}%</p>
                            </div>
                            <div>
                                <span>Sunrise</span>
                                <p>{new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                            <div>
                                <span>Sunset</span>
                                <p>{new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Search for a city to see details</p>
                )}
            </div>
        </div>
    );
}

export default App; 