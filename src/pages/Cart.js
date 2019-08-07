import React, { Component, Fragment } from 'react'
import Product from '../models/Product';
import ProductCart from '../component/product/ProductCart';
import { PrimaryButton, SecondaryButton } from '../component/Button';

export default class Cart extends Component {
    removeFomCart= (index)=> {
        this.props.removeFomCart(index)
    }


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
                                <Fragment>
                                    <ProductCart 
                                        key={item.getId()}
                                        name={item.getName()}
                                        images={item.getImages()}
                                        price={item.getFormattedPrice()}
                                        removeFomCart={this.props.removeFomCart}
                                    />
                                    <SecondaryButton onClick={() => this.removeFomCart(index)}>
                                        remove from cart
                                    </SecondaryButton>
                                </Fragment>
                                
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
