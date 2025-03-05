import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries"
import { Search } from "../../interfaces/search";

import styles from './Form.module.css'
import { Alert } from "../../error/Alert";

const INITIAL_STATE: Search = {
    city:'',
    country:''
};

interface FormProps {
    fetchWeather: (search: Search) => Promise<void>;
}

export const Form = ({fetchWeather}: FormProps) => {

    const [search, setSearch] = useState<Search>(INITIAL_STATE);
    const [alert, setAlert] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(Object.values(search).includes('')) 
            return setAlert('Please fill all the fields');

        fetchWeather(search);
        setSearch(INITIAL_STATE);
    } 

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">City:</label>
                <input
                    id="city" 
                    type="text"
                    name="city"
                    placeholder="City"
                    value={search.city}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Country:</label>
                <select id='country' name='country' value={search.country} onChange={handleChange}>
                    <option value=''> -- Select a country -- </option>
                    {
                        countries.map( country => (
                            <option key={country.code} value={country.code}>{country.name}</option>
                        ))
                    }
                </select>
            </div>

            <input className={styles.submit} type="submit" value='Get weather' />
        </form>
    )
}
