import React, { Component } from 'react'
import ProductList from '../component/product/ProductList';
import {getProducts} from '../api/Products';
import LoadingIndicator from '../component/LoadingIndicator';

export default class Home extends Component {
    state = {products: [], loading: true};

    componentDidMount = async () => {
        const products = await getProducts() || [];
        this.setState({ products, loading:false});
    };

    render() {
        return (
            this.state.loading ?
            <LoadingIndicator /> :
            <ProductList products={this.state.products} />
        )
    }
}
