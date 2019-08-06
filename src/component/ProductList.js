import React, { Component } from 'react'
import ProductCart from './ProductCart';
import './ProductList.css'
export default class ProductList extends Component {
    render() {
        return (
            <div className="ProductList">
                {this.props.products.map((product, index) => 
                        <ProductCart key={product.id}
                        {...product }
                        pull={index % 2 === 0}
                    />
                )}
            </div>
        )
    }
}
