import React, { Component } from 'react'
import { connect } from 'react-redux';
import {adminGetApplications} from '../../actions/index'
import Application from './Application'

class AllApplications extends Component {

    componentDidMount()
    {
        this.props.adminGetApplications()
    }

    render() {
        return (
            <div className="container container-fluid">
                <br /><h2>All Applications ({this.props.state.adminApplications.applications.length}):</h2>
                <div className="container container-fluid">
                    <div className="row">
                        {this.props.state.adminApplications.applications.map((application, index)=>(<Application style={{margin: "3%"}} application={application} key={index} />))}
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
        adminGetApplications: () => dispatch(adminGetApplications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllApplications)