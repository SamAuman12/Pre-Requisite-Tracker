import React, {Component} from 'react';
import {Row} from "./Row";

export class Table extends Component{

    render(){
        return <table className="table table-sm table-striped table-bordered">
            <thead>
                <tr>
                    <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
                        {this.props.name}
                    </th>
                </tr>
                <tr>
                <th>ID</th>
                    <th>Description</th>
                    <th>Semester</th>
                    <th>Prefix</th>
                    <th>Number</th>
                    <th>Grade</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.courses.map(c =>
                        <Row course={c}
                                key={c.id}
                                editCallback={ this.props.editCallback} />)
                }
            </tbody>
        </table>
    }

}