import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../FormikDatePicker/FormikDatePicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField } from 'formik';

const FormikDatePicker = ({ value, onChange, onBlur, error, touched, label, name }) => {
    // const [field, meta] = useField({ ...props, type: 'Date'});
    // const [date, setDate] = useState(new Date());
    const [date, setDate] = useState();

    const handleDateChange = (date) => {
        console.log(date);
        setDate(date);
    }

    useEffect(() => {
        setDate(date);
    }, [date]);

    return (
        <>
            <label>{label}</label>
            <br />
            <DatePicker
            // placeholderText='mm/dd/yyyy'
            className='form-control'
            selected={value}
            value={value}
            todayButton='Today'
            onChange={(value) => {
                onChange(name, value);
            }}
            onBlur={() => {
                onBlur(name, true);
            }}
            />
            {touched && error ? (<div>{error}</div>) : null}
        </>
    )
}

export default FormikDatePicker;

