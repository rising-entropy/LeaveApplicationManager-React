import React, { Component } from 'react'
import AllApplications from '../AllApplications/AllApplications'
import AddApplication from '../AddApplication/AddApplication'

export default class ApplicationsPage extends Component {
    render() {
        return (
            <div>
                <AddApplication/>
                <AllApplications/>
            </div>
        )
    }
}
