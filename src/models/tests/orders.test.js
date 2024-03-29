import Order from '../Order';

test('It sums the total price correctyl', () => {
    const raw ={
        _id: '111',
        customer: '222',
        timestamp: 1550857842273,
        products: [
            {_id: '1234', name: 'foo', price: 1000, images: ['1'],},
            {_id: '5678', name: 'foo', price: 1500, images: ['2'],}
        ] 
    } 
});

const order = new Order(raw);

expect(order.getTotalPrice()).toEqual(2500);
expect(order.getFormattedTotalPrice()).toEqual('$25');