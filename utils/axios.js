import Axios from 'axios'
import backend from '../constants/backend';

var axios = Axios.create({
    baseURL: backend
});

export default axios