import React, { Component, Fragment } from 'react'
import ProductCart from './product/ProductCart';
import { PrimaryButton } from './Button';
import Product from '../models/Product';

export default class ShoppingCartList extends Component {
    render() {
        return (
            this.props.items.length > 0 ? (
                <div>
                  {this.props.items
                    .map(item => new Product(item))
                    .map((item, index) => (
                      <Fragment>
                        <ProductCart
                          key={`${item.getId()}_${index}`}
                          name={item.getName()}
                          images={item.getImages()}
                          price={item.getFormattedPrice()}
                          withRemoveButton={true}
                          onRemove={() => this.props.removeFomCart(index)}
                        />
                      </Fragment>
                    ))}
                  <PrimaryButton onClick={this.props.startedCheckout}>
                    Checkout
                  </PrimaryButton>
                </div>
              ) : 
                <p>Your cart is empty. Add some poducts!</p>
        )
    }
}
