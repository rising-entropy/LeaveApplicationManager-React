import React, { Component } from 'react'
import { connect } from 'react-redux';

class LoginPage extends Component {

    usernameHandler = (e) => {
        this.props.loginUsername(e.target.value)
    }

    passwordHandler = (e) => {
        this.props.loginPassword(e.target.value)
    }

    render() {

        return (
            <div className="container container-fluid">
                <div className="text-center">
                    <form>
                        <br />
                        <h2>Login Page</h2>
                        <br />
                        <label htmlFor="username">Username:</label><br />
                        <input type="text" name="username" onChange={this.usernameHandler.bind(this)} required />
                        <br /><br />
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" name="password" onChange={this.passwordHandler.bind(this)} required />
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
        loginPassword: (password) => dispatch({type: 'loginPassword', password: password})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)