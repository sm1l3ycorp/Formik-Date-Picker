import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FormikDatePicker/FormikDatePicker.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FormikDatePicker = ({ placeHolderText, value, onChange, onBlur, error, touched, label, name }) => {
    return (
        <>
            <label>{label}</label>
            <div className={styles.datePicker}>
            <DatePicker
            placeholderText={placeHolderText}
            selected={value}
            todayButton='Today'
            onChange={(value) => {
                onChange(name, value);
            }}
            onBlur={() => {
                onBlur(name, true);
            }}
            />
            <FontAwesomeIcon className={styles.calendarIcon} icon='calendar-alt' size='xs' />
            {touched && error ? (<div>{error}</div>) : null}
            </div>                  
        </>
    )
}

export default FormikDatePicker;
