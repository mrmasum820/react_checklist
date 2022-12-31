import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Formik() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3, "name must have at least 3 characters").required(),
            email: yup.string().required(),
            password: yup.string().min(6, "password must have at least 6 characters").required(),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: '' });
        }
    });

    // formik touched use
    // formik error
    const nameError = formik.touched.name && formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>

    const emailError = formik.touched.email && formik.errors.email && <span style={{ color: 'red' }}>{formik.errors.email}</span>

    const passwordError = formik.touched.password && formik.errors.password && <span style={{ color: 'red' }}>{formik.errors.password}</span>

    //using form as variable
    const renderForm = <form action="" onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="name">Name: <input type="text" name="name" id="name" onChange={formik.handleChange}
                value={formik.values.name} /></label>
            <br />
            {nameError}
        </div>
        <div>
            <label htmlFor="email">Email: <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} /></label>
            <br />
            {emailError}
        </div>
        <div>
            <label htmlFor="password">Password: <input type="password" name="password" id="password"
                onChange={formik.handleChange} value={formik.values.password} /></label>
            <br />
            {passwordError}
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>


    return (
        <div>
            <h2>Registration</h2>
            {renderForm}
        </div>
    )
}
