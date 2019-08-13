import axios from './axios';
import getAuthHeader from './getAuthHeader';
import Order from '../models/Order';

export const getOrders = async () => {
    try {
        const {data} = await axios.get(
            '/v1/orders',
            {headers: await getAuthHeader()}
        );
        return {
            success: true,
            data: data.map(order => new Order(order))
        }
    } catch(error) {
        return {
            success: false,
            error: 'Could not load order history. Please, refresh the page'
        };
    }
};

export const placeOrder = async (body) => {
    try{
        const {data} = await axios.post(
            '/v1/orders',
            body,
            {headers: await getAuthHeader()}
        );
        if(data && data._id) {
            
            return {
                success: true,
                data: new Order(data)
            };
        } else {
            return {
                success: false,
                error:  'An unknow error occured. Please, retry again later.'
            };
        }
    } catch (error) {
        switch (error.response.status) {
            case 400: 
                return {
                    success: false,
                    error: "we couldn't setup the order for you. pleas check yoru contact and shipping details"
                };
            case 401:
                return {
                    success: false,
                    error: 'plaing the order failde because your session expired. Please, refresh the page and try again.'
                };
            default: 
                return {
                    success: false,
                    error: 'an unknow error occured. Please, retry agai later'
                }
        }
    }
}