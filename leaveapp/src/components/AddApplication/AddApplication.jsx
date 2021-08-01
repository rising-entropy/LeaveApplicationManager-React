import React, { Component } from 'react'

export default class AddApplication extends Component {
    render() {
        return (
            <div className="container container-fluid">
                <br />
                <h3>Leave Application Form</h3>
                <br />
                <form>
                <label htmlFor="reason">Leave Type:</label>
                <select class="form-control" name="reason" required={true}>
                    <option>Sick Leave</option>
                    <option>Casual Leave</option>
                    <option>Maternity Leave</option>
                    <option>Paternity Leave</option>
                    <option>Compulsory Off</option>
                    <option>Privilege Leave</option>
                    <option>Bereavement Leave</option>
                </select>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <label htmlFor="start">Start Date:</label><br />
                            <input type="date" name="start" required/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <label htmlFor="end">End Date:</label><br />
                            <input type="date" name="end" required />
                        </div>
                    </div>
                </div>
                <br />
                <label htmlFor="start">Upload Files:</label><br />
                <input type="file" name="docs" multiple="multiple"   />
                <button type="submit" className="btn btn-success">Submit Application</button>
                </form>
            </div>
        )
    }
}
