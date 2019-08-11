import React, { Component, Fragment } from 'react'
import Product from '../models/Product';
import ProductCart from '../component/product/ProductCart';
import { PrimaryButton, SecondaryButton } from '../component/Button';
import Form from '../component/Form';
import TextInput from '../component/inputs/TextInput';
import LoadingIndicator from '../component/LoadingIndicator';
import { stat } from 'fs';

export default class Cart extends Component {
    state = {
        startedCheckout: false,
        contact: {},
        shippingAddress: {}
    };

    startedCheckout = e => this.setState({startedCheckout: true})
    handleChange = e => {
        const {name, value} = e.target;
        const [obj, key] = name.split('.');
        const state = Object.assign({}, this.state);
        state[obj][key] = value;
        this.setState(state);
    }

    render() {
        return (
            <div className="Cart">
                <h2>My Cart</h2>
                { !this.state.startedCheckout ?
                    null :
                    (this.props.items.length > 0  ?
                        <div>
                            {
                                this.props.items
                                .map(item => new Product(item))
                                .map((item, index) =>
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
                                    
                                )
                            }
                            <PrimaryButton onClick={this.startedCheckout}>
                                Checkout
                            </PrimaryButton>
                        </div> :
                        <p>Your cart is empty. Add some poducts!</p>
                    )
                }
                {
                    this.state.startedCheckout &&
                    <Form onSubmit={this.props.submitOrder}>
                        <TextInput
                        label="Full Name"
                        name="contact.fullName"
                        value={this.props.values.contact.fullName || ''}
                        onChange={this.props.handleChange}
                        />
                        <TextInput
                        label="Phone Number"
                        name="contact.phoneNumber"
                        value={this.props.values.contact.phoneNumber || ''}
                        onChange={this.props.handleChange}
                        />
                        <TextInput
                        label="Country"
                        name="shippingAddress.country"
                        value={this.props.values.shippingAddress.country || ''}
                        onChange={this.props.handleChange}
                        />
                        <TextInput
                        label="City"
                        name="shippingAddress.city"
                        value={this.props.values.shippingAddress.city || ''}
                        onChange={this.props.handleChange}
                        />
                        <TextInput
                        label="Address Line 1"
                        name="shippingAddress.addressLine1"
                        value={this.props.values.shippingAddress.addressLine1 || ''}
                        onChange={this.props.handleChange}
                        />
                        <TextInput
                        label="Address Line 2"
                        name="shippingAddress.addressLine2"
                        value={this.props.values.shippingAddress.addressLine2 || ''}
                        onChange={this.props.handleChange}
                        />
                        <TextInput
                        label="Postal Code"
                        name="shippingAddress.postalCode"
                        value={this.props.values.shippingAddress.postalCode || ''}
                        onChange={this.props.handleChange}
                        />
                        <PrimaryButton disabled={this.props.loading}>
                        Place Order
                        </PrimaryButton>
                        {this.props.loading &&
                        <LoadingIndicator />
                        }
                        {this.props.errorMessage &&
                        <p style={{ color: 'crimson'}}>{this.props.errorMessage}</p>
                        }
                    </Form>
                }

            </div>
        )
    }
}
