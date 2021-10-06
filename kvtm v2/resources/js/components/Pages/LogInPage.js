import React, { useContext } from 'react'
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from "axios";
import { AuthContext } from '../App';
import { useHistory } from 'react-router-dom';
import styles from '../Styles/Form.module.css';

function LogInPage() {
    const authCtx = useContext(AuthContext)
    const history = useHistory();
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={Yup.object({
                username: Yup.string().required('Required'),
                password: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    axios.post('/api/login', {
                        name: values.username,
                        password: values.password
                    })
                        .then(response => {
                            if (response.status == 201 && response.data.token) {
                                authCtx.login(response.data.token);
                            }
                        })
                        .catch(error => { alert(error.message) })
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="username">Username</label><br />
                <Field name="username" type="text" /><br />
                <ErrorMessage name="username" /> <br />

                <label htmlFor="password">Password</label><br />
                <Field name="password" type="password" /><br />
                <ErrorMessage name="password" /> <br />

                <button type="submit">Submit</button>
            </Form>
        </Formik >
    )
}

export default LogInPage
