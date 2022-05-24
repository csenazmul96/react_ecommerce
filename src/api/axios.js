import axios from 'axios';
let user = localStorage.getItem('user')
user = JSON.parse(user)
let token = ''
if(user)
    token = user.token

export default axios.create({
    baseURL: 'https://davidani.com/api/api',
    credentials: true,
    headers: {
        common: {
            'Accept': 'application/json',
            'Authorization': token ? `Bearer ${token}` : null
        },
    }

});
