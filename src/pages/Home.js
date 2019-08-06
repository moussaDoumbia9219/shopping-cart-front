import React, { Component } from 'react'
import ProductList from '../component/ProductList';
import products  from '../data/products';


export default class Home extends Component {
    render() {
        return (
            <ProductList products={products} />
        )
    }
}
