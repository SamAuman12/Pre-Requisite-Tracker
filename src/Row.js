import React, {Component} from 'react';

export class Row extends Component{

    render(){
        let d = this.props.course;
        return <tr>
                <td>{d.id}</td>
                <td>{d.description}</td>
                <td>{d.semester}</td>
                <td>{d.prefix}</td>
                <td>{d.number}</td>
                <td>{d.grade}</td>
                <td>
                    <button className="btn btn-sm btn-warning m-1"
                            onClick={ () =>this.props.editCallback(d)}>
                        Edit
                    </button>
                </td>
        </tr>
    }
    
}