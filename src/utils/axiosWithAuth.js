import axios from 'axios';

// Build a module that "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token
export const getToken = () => (
  localStorage.getItem('token')
)

export const axiosWithAuth = () => {
  // const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://mock-users-server.herokuapp.com/api',
    headers: {
      Authorization: getToken()
    }
  });
};
