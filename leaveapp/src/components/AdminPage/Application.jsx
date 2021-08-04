import React, { Component } from 'react'

export default class Application extends Component {

    
    render() {
        return (
            <div className="card col-lg-4 col-md-6 col-sm-12 text-center" style={{margin: "4% auto"}}>
                <h5 className="card-header">{this.props.application.leaveType}</h5>
                <div className="card-body">
                    <h4>{this.props.application.username}</h4>
                    <h5 className="card-title" style={{margin: "20px auto"}}>{this.props.application.leaveFrom} - {this.props.application.leaveTo}</h5>
                    {this.props.application.documents.map((doc, index)=>(
                        <a href={doc} className="btn btn-primary" key={index} rel="noreferrer" target="_blank" style={{margin: "3% 2%"}}>Doc {index+1}</a>
                    ))}
                </div>
            </div>
        )
    }
}