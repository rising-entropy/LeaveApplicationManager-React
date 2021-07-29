import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from "axios";

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
        const body = await {
            username: this.props.state.login.username,
            password: this.props.state.login.password
        }
        axios.post(
        'https://leave-application-react.deta.dev/api/login',
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          if (data.status === 404) {
            alert(data.message);
            window.location = "/login";
            return 0;
          }
          if (data.status === 403) {
            alert(data.message);
            window.location = "/login";
            return 0;
          }
          localStorage.setItem("username", data.username);
          localStorage.setItem("token", data.token);
          alert("Successfully Logged In")
          window.location = "/feed";
        }
      })
      .catch((err) => {
        alert("Server Seems to be down. Please try later. We got this.");
        window.location = '/login'
      });
    }


    render() {

        return (
            <div className="container container-fluid">
                <div className="text-center">
                    <form onSubmit={this.loginSubmitHandler.bind(this)}>
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