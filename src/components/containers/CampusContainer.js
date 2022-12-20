/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import {  fetchCampusThunk,editStudentThunk, fetchStudentThunk, deleteStudentThunk } from "../../store/thunks";

import { CampusView } from "../views";
import { editStudent, fetchStudent, deleteStudent } from '../../store/actions/actionCreators';

class CampusContainer extends Component {
  // Get the specific campus data from back-end database
  constructor(props){ super(props)
    this.state = {
      kickStudent: false
    };
  }
  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(this.props.match.params.id);
  }

  kickStudent = studentId => {
    console.log(typeof this.props.campus.students);

    // let student = fetchStudent(studentId)
    // this.props.editStudent(student)
    for(let i = 0; i < this.props.campus.students.length; ++i){
      if(studentId === this.props.campus.students[i].id){
        this.props.campus.students[i].campusId = null;
        this.props.editStudent(this.props.campus.students[i]); 
        this.props.campus.students.splice(i, 1);
        break;
      }
    }

    // this.props.campus.students.remove(student)

      console.log("Croissant")
    this.setState({kickStudent: true});}

  // Render a Campus view by passing campus data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <CampusView campus={this.props.campus} 
        kickStudent={this.kickStudent}
        />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "CampusContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "campus".
const mapState = (state) => {
  return {
    campus: state.campus,  // Get the State object from Reducer "campus"
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id))
  };
};

// Export store-connected container by default
// CampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(CampusContainer);