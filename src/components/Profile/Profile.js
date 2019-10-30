import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios'

const Profile = ({ history }) => {
    

    
    const[message, setMessage] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        const url = 'https://mock-users-server.herokuapp.com/api/protected'
        if(token) {
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then (res => {
                console.log(res)
                setMessage(res.data.message)
            })
            .catch(e => {
                console.log(e.response.data)
                localStorage.removeItem('token')
                // eslint-disable-next-line no-restricted-globals
                history.push('/')
            })
        }
    }, [history])


    return ( 
        <>
            <div>Profile Page</div>
            <div>{message}</div>
            <button onClick={() => {
                localStorage.removeItem('token');
                // eslint-disable-next-line no-restricted-globals
                history.push('/')}}>Logout</button>
        </>
     );
}
 
export default withRouter(Profile);