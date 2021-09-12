import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-27126.cloudfunctions.net/api'
    //'http://localhost:5001/challenge-27126/us-central1/api'
});

export default instance;