import React from 'react'
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

function LogInPage() {
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().required('Required'),
                password: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="username">Username</label><br />
                <Field name="username" type="text" /><br />
                <ErrorMessage name="username" /> <br />

                <label htmlFor="password">Password</label><br />
                <Field name="password" type="text" /><br />
                <ErrorMessage name="password" /> <br />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default LogInPage
