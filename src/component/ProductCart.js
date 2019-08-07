import React, { Component } from "react";
import "./ProductCart.css";
import { SecondaryButton } from "./Button";

export default class ProductCart extends Component {
    constructor(props) {
        super(props);
        this.state = { image: this.props.images[0] };
    }

    
    HandleHover = () => {
        if(this.props.images.length > 1) {
            this.setState({ image: this.props.images[1] });
        }
    };

    HandleLeaveHover = () => {
        this.setState({
        image: this.props.images[0]
        });
    };

    removeFomCart= ()=> {
        this.props.removeFomCart(this.props.index)
    }

    render() {
        return (
            <div  className="ProductCart">
                <SecondaryButton onClick={this.removeFomCart}>
                    remove from cart
                </SecondaryButton>
                <img
                    src={this.state.image}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                />
                <h3>{this.props.name}</h3>
                <p>{this.props.price}</p>
                
            </div>
        );
    }
}
