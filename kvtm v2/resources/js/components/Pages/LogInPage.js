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
                        .catch(error => { alert('Login failed!') })
                    setSubmitting(false);
                }, 400);
            }}
        >
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        Login Form
                    </div>
                    <Form>
                        <div className={styles.field}>
                            <Field name="username" placeholder="Username" type="text" className={styles.field_input} />
                            <ErrorMessage name="username">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className={styles.field}>
                            <Field name="password" placeholder="Password" type="password" className={styles.field_input} />
                            <ErrorMessage name="password">{msg => <div className={styles.error}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className={styles.field}>
                            <button type="submit" className={styles.input}>Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik >
    )
}

export default LogInPage
