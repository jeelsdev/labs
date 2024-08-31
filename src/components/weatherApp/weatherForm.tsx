import { useState } from "react";

import styles from './weatherForm.module.css';

const WeatherForm = ({onChangeCity}: {onChangeCity:(city: string) => void}) => {
    const [city, setCity] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if(value != '') {
            setCity(value);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <input type="text" onChange={onChange} className={styles.input} placeholder="Ingrese el nombre de una ciudad"/>
        </form>
    )
}

export default WeatherForm;