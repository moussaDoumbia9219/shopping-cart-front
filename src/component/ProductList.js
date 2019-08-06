import React, { Component } from 'react'
import ProductCart from './ProductCart';
import {Link} from 'react-router-dom';
import './ProductList.css'
export default class ProductList extends Component {
    render() {
        return (
            <div className="ProductList">
                {this.props.products.map((product, index) => 
                    <Link
                        key={product.getId()}
                        to={`/product/${product.getId()}`}
                        style={
                            index % 2 === 0 ?
                            {alignSelf: 'flex-end'}: null
                        }
                    >
                        <ProductCart 
                            name={product.getName()}
                            images={product.getImages()}
                            price={product.getFormattedPrice()}
                        />
                    </Link>
                )}
            </div>
        )
    }
}
