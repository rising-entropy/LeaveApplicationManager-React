import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ADD_APPLICATION} from '../../constants/index'

class AddApplication extends Component {
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
                <input type="file" name="docs" multiple="multiple" required={true}/>
                <button type="submit" className="btn btn-primary">Submit Application</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        leaveType: (leave) => dispatch({type: ADD_APPLICATION.LEAVE_TYPE, leave}),
        startDate: (theDate) => dispatch({type: ADD_APPLICATION.START_DATE, theDate}),
        endDate: (theDate) => dispatch({type: ADD_APPLICATION.END_DATE, theDate}),
        filesUpload: (files) => dispatch({type: ADD_APPLICATION.FILES_UPLOAD, files})
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddApplication)