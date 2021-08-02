import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getUserApplications} from '../../actions/index'
import Application from './Application'

class AllApplications extends Component {

    componentDidMount()
    {
        this.props.getUserApplications()
    }

    render() {
        return (
            <div className="container container-fluid">
                <h2>Your Applications ({this.props.state.getApplications.applications.length}):</h2>
                <div className="container container-fluid">
                    <div className="row">
                        {this.props.state.getApplications.applications.map((application, index)=>(<Application application={application} key={index} />))}
                    </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        getUserApplications: () => dispatch(getUserApplications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllApplications)