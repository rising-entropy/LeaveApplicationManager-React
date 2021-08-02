import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loginFormSubmit} from '../../actions/index'

class LoginPage extends Component {

    constructor(props)
    {
        super();
    }

    usernameHandler = (e) => {
        this.props.loginUsername(e.target.value)
    }

    passwordHandler = (e) => {
        this.props.loginPassword(e.target.value)
    }

    loginSubmitHandler = async (e) => {
        e.preventDefault()
        this.props.loginFormSubmit()
        return
    }


    render() {

        return (
            <div className="container container-fluid">
                <div className="text-center">
                    <form onSubmit={this.loginSubmitHandler.bind(this)}>
                        <br />
                        <h2>Login Page</h2>
                        <br />
                        <label htmlFor="fhdufmktfdtjs">Username:</label><br />
                        <input type="text" name="fhdufmktfdtjs" onChange={this.usernameHandler.bind(this)} autoComplete="off" required />
                        <br /><br />
                        <label htmlFor="kdtjdsjsfgsd">Password:</label><br />
                        <input type="password" name="kdtjdsjsfgsd" onChange={this.passwordHandler.bind(this)} autoComplete="off" required />
                        <br /><br /><br />
                        <button type="submit" className="btn-lg btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUsername: (username) => dispatch({type: 'loginUsername', username: username}),
        loginPassword: (password) => dispatch({type: 'loginPassword', password: password}),
        loginFormSubmit: ()=>dispatch(loginFormSubmit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)