import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getUserApplications} from '../../actions/index'

class AllApplications extends Component {

    componentDidMount()
    {
        this.props.getUserApplications()
        console.log(this.props.state)
    }

    render() {
        return (
            <div className="container container-fluid">
                <h2>Your Applications ():</h2>
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