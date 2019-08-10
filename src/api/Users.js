import axios from './axios';
import User from '../models/User';
import getAuthHeader from './getAuthHeader';

export const getUsers = async () => {
    try {
        const {data} = await axios.get('/v1/users', {headers: await getAuthHeader()});
        return data.map(user => new User(user));
         
    } catch(error) {
        console.log(error);
    }
};