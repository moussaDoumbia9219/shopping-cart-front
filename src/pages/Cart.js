import React, { Component } from 'react'
import Product from '../models/Product';
import ProductCart from '../component/ProductCart';
import { PrimaryButton, SecondaryButton } from '../component/Button';

export default class Cart extends Component {
    render() {
        return (
            <div className="Cart">
                <h2>My Cart</h2>
                {this.props.items.length > 0 ?
                    <div>
                        {
                            this.props.items
                            .map(item => new Product(item))
                            .map((item, index) =>
                                <ProductCart 
                                    key={item.getId()}
                                    name={item.getName()}
                                    images={item.getImages()}
                                    price={item.getFormattedPrice()}
                                    index={index}
                                    removeFomCart={this.props.removeFomCart}
                                />
                            )
                        }
                        <PrimaryButton>
                            Checkout
                        </PrimaryButton>
                    </div> :
                    <p>Your cart is empty. Add some poducts!</p>
                }
            </div>
        )
    }
}
