import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Profile = () => {
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
            })
        }
    }, [])
    return ( 
        <>
            <div>Profile Page</div>
            <div>{message}</div>
        </>
     );
}
 
export default Profile;