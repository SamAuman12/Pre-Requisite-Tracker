import React, {Component} from 'react';

export class Editor extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: {
                id: props.class.id || "",
                description: props.class.description || "", 
                semester: props.class.semester || "", 
                prefix: props.class.prefix || "",
                number: props.class.number || "",
                grade: props.class.grade || ""
            }
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState(state => state.data[event.target.name] = event.target.value);
    }

    click = () => {
        this.props.saveCallback(this.state.data);
    }

    render(){
        let flag = true && this.state.data.prefix === "FYE";
        
        return <div className="m-2">
            <div className="form-group">
                <label>ID</label>
                <input className="form-control"
                       name="id"
                       disabled
                       value={this.state.data.id}
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input className="form-control"
                       name="description"
                       value={this.state.data.description}
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Semester</label>
                <input className="form-control"
                       name="semester"
                       value={this.state.data.semester}
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Prefix</label>
                <input className="form-control"
                       name="prefix"
                       disabled = {flag} 
                       value={this.state.data.prefix}
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Number</label>
                <input className="form-control"
                       name="number"
                       value={this.state.data.number}
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label>Grade</label>
                <input className="form-control"
                       name="grade"
                       value={this.state.data.grade}
                       onChange={this.handleChange} />
            </div>
            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={this.click}>
                    Save
                </button>
                <button className="btn btn-secondary"
                        onClick={ this.props.cancelCallback }>
                    Cancel
                </button>
            </div>
        </div>
        }
    }

