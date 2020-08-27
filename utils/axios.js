import Axios from 'axios'
import backend from '../constants/backend';

var axios = Axios.create({
    baseURL: backend,
    timeout: 1000,
});

export default axios