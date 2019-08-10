import React, { Component } from 'react'
import TextInput from '../component/inputs/TextInput';
import Form from '../component/Form';
import {PrimaryButton} from '../component/Button';
import {login} from '../api/Auth';

export default class Account extends Component {
    state = {
        email: '',
        loading: false,
        done: false,
        error: undefined
    };

    handleEmailChange = e => 
        this.setState({email: e.target.value});
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const r = await login(this.state.email);
        console.log(r);
    }

    render() {
        return (
            <div>
                <h1>Login or Register</h1>
                <p>If you do not have an account, a new one will be setup for you automatically. </p>
                <Form onSubmit={this.handleSubmit}>
                    <TextInput 
                        label="Email Adress"
                        placeholder="e.g. anna.ryan@gmail.com"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <PrimaryButton>
                        Login
                    </PrimaryButton>
                </Form>
                
            </div>
        )
    }
}
