import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1QBo4eHaBSetKc8RzPZO2YpF8YFCLU_na_4GKQkB12Q'
    },
});