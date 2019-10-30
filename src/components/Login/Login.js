import React from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

const Login = ({ touched, errors }) => {
    return ( 
        <Form className='form-group'>
            <div className='form'>
                <label className='label'>Email</label>
                <Field name='email' type='email' 
                    autoComplete='off'
                />
                <p>{touched.email && errors.email}</p>
            </div>
            <div className='form'>
                <label className='label'>Password</label>
                <Field name='password' type='password' 
                    autoComplete='off'
                />
                <p>{touched.password && errors.password}</p>
            </div>
            <button type='submit'>Submit &rarr; </button>
        </Form>
       
     );
}
 
export default withFormik ({
    mapPropsToValues() {
        return {
            email: '',
            password: ''
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email().required(),
        password: Yup.string()
        .min(6).required()
    }),
    handleSubmit(values) {
        const url = 'https://mock-users-server.herokuapp.com/api/auth'
        axios.post(url, values)
        .then(console.log)
        .catch(e => {
            console.log(e.response.data)
        })
    }
}) (Login);