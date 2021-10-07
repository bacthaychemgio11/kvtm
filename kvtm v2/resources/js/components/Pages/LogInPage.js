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

            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Login Form
                </div>
                <Form>
                    <div className={styles.field}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <Field name="username" type="text" className={styles.field_input}/>
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <Field name="password" type="password" className={styles.field_input}/>
                    </div>
                    <div className={styles.field}>
                        <button type="submit" className={styles.input}>Submit</button>
                    </div>
                </Form>
            </div>
        </Formik >
    )
}

export default LogInPage
