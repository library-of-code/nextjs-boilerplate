import Axios from 'axios'

var axios = Axios.create({
    baseURL: 'http://localhost:1337/',
    timeout: 1000,
});

export default axios