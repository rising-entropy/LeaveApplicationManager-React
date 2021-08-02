import React, { Component } from 'react'
import { connect } from 'react-redux';

class SignUpPage extends Component {

    constructor(props)
    {
        super();
    }

    fNameHandler = (e) => {
        this.props.signUpFName(e.target.value)
    }

    lNameHandler = (e) => {
        this.props.signUpLName(e.target.value)
    }

    usernameHandler = (e) => {
        this.props.signUpUsername(e.target.value)
    }

    emailHandler = (e) => {
        this.props.signUpEmail(e.target.value)
    }

    passwordHandler = (e) => {
        this.props.signUpPassword(e.target.value)
    }

    cPasswordHandler = (e) => {
        this.props.signUpCPassword(e.target.value)
    }

    companyHandler = (e) => {
        this.props.signUpCompany(e.target.value)
    }

    positionHandler = (e) => {
        this.props.signUpPosition(e.target.value)
    }

    departmentHandler = (e) => {
        this.props.signUpDepartment(e.target.value)
    }

    signUpFormSubmitHandler = (e) => {
        e.preventDefault()
        if(this.props.state.signUp.password !== this.props.state.signUp.cPassword)
        {
            alert("Password and Confirm Password do not match.")
        }
        const body = {
            fName: this.props.state.signUp.fName,
            lName: this.props.state.signUp.lName,
            username: this.props.state.signUp.username,
            email: this.props.state.signUp.email,
            password: this.props.state.signUp.password,
            company: this.props.state.signUp.company,
            position: this.props.state.signUp.position,
            department: this.props.state.signUp.department
        }
        console.log(body)
    }

    render() {
        return (
            <div className="container container-fluid">
                <br /><h2>Sign Up Form:</h2><br />
                <form onSubmit={this.signUpFormSubmitHandler.bind(this)}>
                    <div className="container container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="fName">First Name:</label><br />
                            <input type="text" name="fName" onChange={this.fNameHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="lName">Last Name:</label><br />
                            <input type="text" name="lName" onChange={this.lNameHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="username">Username:</label><br />
                            <input type="text" name="username" onChange={this.usernameHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" name="email" onChange={this.emailHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" name="password" onChange={this.passwordHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="cPassword">Confirm Password:</label><br />
                            <input type="password" name="cPassword" onChange={this.cPasswordHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="company">Company:</label><br />
                            <input type="text" name="company" onChange={this.companyHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="position">Position:</label><br />
                            <input type="text" name="position" onChange={this.positionHandler.bind(this)} onChange={this.positionHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <label htmlFor="dept">Department:</label><br />
                            <input type="text" name="dept" onChange={this.departmentHandler.bind(this)} required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: "1% auto"}}>
                            <button className="btn btn-primary" type="submit" style={{margin: "3% auto"}}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpFName: (fName) => dispatch({type: 'signUpFName', fName}),
        signUpLName: (lName) => dispatch({type: 'signUpLName', lName}),
        signUpUsername: (username) => dispatch({type: 'signUpUsername', username: username}),
        signUpPassword: (password) => dispatch({type: 'signUpPassword', password}),
        signUpCPassword: (cPassword) => dispatch({type: 'signUpCPassword', cPassword}),
        signUpEmail: (email) => dispatch({type: 'signUpEmail', email}),
        signUpCompany: (company) => dispatch({type: 'signUpCompany', company}),
        signUpPosition: (position) => dispatch({type: 'signUpPosition', position}),
        signUpDepartment: (department) => dispatch({type: 'signUpDepartment', department}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)