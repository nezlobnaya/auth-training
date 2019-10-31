import React from 'react';
import { Redirect } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const Login = ({ touched, errors }) => {
    const token = localStorage.getItem('token')
        if(token) {
          return <Redirect to='/profile' />
        }
       
    
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
    handleSubmit(values, formikBag) {
        // console.log(formikBag.props)
        // const url = 'https://mock-users-server.herokuapp.com/api/auth'
        axiosWithAuth()
        .post('/auth', values)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            formikBag.props.history.push('/profile')
        })
        .catch(e => {
            console.log(e.response.data)
        })
    }
}) (Login);