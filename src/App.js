import React, {Component} from 'react';
import Display from './Display';
import {BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            acaFoundCourses: [
                {id: 1, description: "First Year Experience",semester:'' , prefix:'FYE', number: '', grade: '  '},
                {id: 2, description: "English Composition I",semester:'' , prefix:'WRT', number: '120', grade: '  '},
                {id: 3, description: "English Composition II",semester:'' , prefix:'WRT', number: '200', grade: '  '},
                {id: 4, description: "Mathematics",semester:'' , prefix:'MAT', number: '151', grade: '  '},
                {id: 5, description: "Interdisciplinary",semester:'' , prefix:'', number: '  ', grade: '  '},
                {id: 6, description: "Diverse Communitites",semester:'' , prefix:'', number: '  ', grade: '  '}
            ],
            additionalCourses: [
                {id: 1, description: "Writing Emphasis I",semester:'' , prefix:'ENG', number: '', grade: '  '},
                {id: 2, description: "Writing Emphasis II",semester:'' , prefix:'WRT', number: '', grade: '  '},
                {id: 3, description: "Writing Emphasis III",semester:'' , prefix:'WRT', number: '', grade: '  '},
                {id: 4, description: "Speaking Emphasis I",semester:'' , prefix:'SPK', number: '', grade: '  '},
                {id: 5, description: "Speaking Emphasis II",semester:'' , prefix:'', number: '  ', grade: '  '},
                {id: 6, description: "Speaking Emphasis III",semester:'' , prefix:'', number: '  ', grade: '  '}
            ],
            distributiveCourses: [
                {id: 1, description: "Science I",semester:'' , prefix:'', number: '', grade: '  '},
                {id: 2, description: "Science II",semester:'' , prefix:'', number: '', grade: '  '},
                {id: 3, description: "Behavior & Social Science I",semester:'' , prefix:'T', number: '', grade: '  '},
                {id: 4, description: "Behavior & Social Science II",semester:'' , prefix:'', number: '', grade: '  '},
                {id: 5, description: "Humanity I",semester:'' , prefix:'', number: '  ', grade: '  '},
                {id: 6, description: "Humanity II",semester:'' , prefix:'', number: '  ', grade: '  '},
                {id: 7, description: "Art",semester:'' , prefix:'', number: '  ', grade: '  '}
            ],
        }
    }

    saveData = (collection, item) => {
        console.log("*** Collection: " + collection);
        console.log("*** Item:" + item);
              this.setState(state => state[collection] 
                  = state[collection].map(stored => 
                        stored.id === item.id ? item: stored))
      }

    render(){
        return <div>
            <h4 className = "bg-primary text-white text-center p-2 m-2">Display GenEd Courses</h4>
            <BrowserRouter>
                <div>
                    <NavLink to="/Aca" className="btn btn-sm m-2">Academic Foundation</NavLink> | {" "}
                    <NavLink to="/Dis" className="btn btn-sm m-2">Distributive Requirements</NavLink> | {" "}
                    <NavLink to="/Add" className="btn btn-sm m-2">Additional Requirements</NavLink>
                </div>
                <Routes>
                <Route path="/Aca" element={
                <Display 
                    name = "Academic Foundation"
                    courses = {this.state.acaFoundCourses}
                    saveCallback={ c => this.saveData("acaFoundCourses", c) } /> }
                    />
                <Route path="/Dis" element={
                 <Display
                 name = "Distributive Requirements"
                 courses = {this.state.distributiveCourses}
                 saveCallback={ c => this.saveData("distributiveCourses", c) }/>}
                 /> 
                <Route path="/Add" element={
                    <Display
                    name = "Additional Requirements"
                    courses = {this.state.additionalCourses}
                    saveCallback={ c => this.saveData("additionalCourses", c) }/>}
                    /> 
                </Routes>
            </BrowserRouter>
        </div>
    }
}
