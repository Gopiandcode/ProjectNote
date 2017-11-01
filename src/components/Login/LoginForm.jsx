import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import googleButton from './btn_google_signin_dark_normal_web.png';
import env from '../../env';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();

        this.props._login(this.state.username, this.state.password)
        this.setState({
            redirectTo: '/'
        });
    }


    render() {
        if(this.state.redirectTo) {
            return (<Redirect to={{ pathname: this.state.redirectTo }}/>);
        } else {
            return (
                <div className="LoginForm">
                    <h1>Login Form</h1>
                    <form>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                        <button onClick={this.handleSubmit}>Login</button>
                    </form>

                    <a href={env.root + "/auth/google"}>
                        <img src={googleButton} alt="Sign in with Google"/>
                    </a>
                </div>
            );
        }
    }
}

export default LoginForm;