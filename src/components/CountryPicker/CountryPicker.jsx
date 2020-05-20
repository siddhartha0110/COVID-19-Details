import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountryData } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const getCountryData = async () => {
            setCountryData(await fetchCountryData());
        }
        getCountryData();
    }, [setCountryData])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countryData.map((country, id) => <option value={country} key={id}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )

}

export default CountryPicker;
