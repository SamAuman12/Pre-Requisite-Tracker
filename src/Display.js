import React, {Component} from 'react';
import { Table } from "./Table";
import { Editor } from "./Editor";

export default class Display extends Component{

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (c) => {
        this.setState({ showEditor: true, selectedCourse: c});
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null});
    }

    saveCourse = (c) => {
        this.props.saveCallback(c);
        this.setState({ showEditor: false, selectedCourse: null});
    }

    render(){
        if(this.state.showEditor){
            return <Editor
                        key={ this.state.selectedCourse.id ||-1}
                        class={ this.state.selectedCourse }
                        saveCallback = {this.saveCourse}
                        cancelCallback = {this.cancelEditing} />
        }
        else{
            return <div className="m-2">
                <Table 
                    name={this.props.name}
                    courses = {this.props.courses }
                    editCallback={ this.startEditing }
                    />
            </div>
        }
    }
}