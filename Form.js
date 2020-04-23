import React, { useState, useEffect } from 'react';
import { Formik, Field, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import FormikDatePicker from '../FormikDatePicker/FormikDatePicker';

const Form = () => {

    return (
        <>
        <Formik
            initialValues={{ date: '' }}
            validationSchema={Yup.object({
                date: Yup.date()
                .required('Required'),
            })}
        onSubmit={(values, formikBag) => {
            setTimeout(() => {
                formikBag.setSubmitting(true);
                console.log(values);
                formikBag.setSubmitting(false);
            }, 400);
        }}
        >

        {(formik) => (
            <form onSubmit={formik.handleSubmit} >
            <FormikDatePicker
            value={formik.values.date}
            onChange={formik.setFieldValue}
            onBlur={formik.setFieldTouched}
            error={formik.errors.date}            
            label={'Date Picker'}
            name={'date'}          
            />
            <br /> 
            <button type="submit" className={'buttonPrimary'}>Submit</button>
            </form>

        )}         
        </Formik>
        </>
    );
};

export default Form;
