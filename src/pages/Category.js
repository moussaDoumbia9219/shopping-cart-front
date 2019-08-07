import React, { Component } from 'react'
import { getProducts } from '../api/Products';
import LoadingIndicator from '../component/LoadingIndicator';
import ProductList from '../component/product/ProductList';

export default class Category extends Component {
    state = {products: [], loading: true};
    
    componentDidMount = async () =>  {
        const {slug} = this.props.match.params;
        const products = await getProducts(slug);
        this.setState({
            products,
            loading: false,
            slug: slug
        })
    }

    componentDidUpdate = async () => {
        const { slug } = this.props.match.params;
        if (slug !== this.state.slug) {
          this.setState({
            loading: true,
            products: [],
            slug: slug,
          });
          const products = await getProducts(slug);
          this.setState({ products, loading: false });
        }
      };
    
      render() {
        return (
          this.state.loading ?
            <LoadingIndicator /> :
            <ProductList products={this.state.products} />
        );
      }

    
}
