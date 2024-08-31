import { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherMainInfo from './weatherMainInfo';

import styles from './weatherApp.module.css';
import Loading from '../globals/loading';

interface WeatherResponse {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    },
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        },
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
    }
}

const WeatherApp = () => {
    const [weather, setWeather] = useState<WeatherResponse | null>(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather in ${(weather as any)?.location?.name ?? ''}`;
    }, [weather]);

    const loadInfo = async (city: string = 'london') => {
        try {
            const request = await fetch(`${import.meta.env.VITE_APP_WEATHER_API_URL}&q=${city}&key=${import.meta.env.VITE_APP_WEATHER_API_KEY}`);
            const response: WeatherResponse = await request.json();

            setWeather(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeCity = (city: string) => {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {
                weather ? <WeatherMainInfo weather={weather} /> : <Loading />
            }
        </div>
    );
}

export default WeatherApp;
