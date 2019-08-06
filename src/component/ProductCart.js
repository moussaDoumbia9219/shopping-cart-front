import React, { Component } from "react";
import "./ProductCart.css";

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

    render() {
        return (
        <div className="ProductCart"
            style={
                this.props.pull ?
                {alignSelf: 'flex-end'}: null
            }
        >
            <img
            src={this.state.image}
            onMouseOver={this.HandleHover}
            onMouseLeave={this.HandleLeaveHover}
            />
            <h3>{this.props.name}</h3>
            <p>{this.props.price}</p>
        </div>
        );
    }
}
