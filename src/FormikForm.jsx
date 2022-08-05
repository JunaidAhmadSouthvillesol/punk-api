import React from 'react'
import { useFormik } from 'formik';
import './FormikForm.css'
const FormikForm = () => {

    const validate = values => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = "Required";
        }
        else if (values.firstName.length > 15) {
            errors.firstName = "Must be 15 Character or less"
        }

        if (!values.lastName) {
            errors.lastName = "Required";
        }
        else if (values.lastName.length > 20) {
            errors.lastName = "Must be 15 Character or less";
        }

        if (!values.email) {
            errors.email = "Required";
        }
        else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "Required";
        }
        else if (values.password.length > 10) {
            errors.password = "Must be 10 Character or less";
        }

        return errors;
    };
















    const formik = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} >
            <label htmlFor="First Name">First Name</label>
            <input
                name="firstName"
                type="text"
                id='firstName'
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                id='lastName'
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                name='email'
                id='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="password">Password</label>
            <input
                type="text"
                name="password"
                id='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <button type='submit' className='submit'> Submit</button>
        </form>
    )
}
export default FormikForm;