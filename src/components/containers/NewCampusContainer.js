import React from 'react'
import Header from './Header';
import NewCampusView from '../views/NewCampusView';
import { Redirect } from 'react-router-dom';
import { addCampusThunk } from '../../store/thunks';
import { connect } from 'react-redux';

class NewCampusContainer extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          address: "", 
          description: "",
          imageUrl: "",
          redirect: false, 
          redirectId: null
        };
      }
    
      // Capture input data when it is entered
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
        console.log(this.state)
      }
    
      // Take action after user click the submit button
      handleSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
    
        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imageUrl
        };
        
        // Add new student in back-end database
        let newCampus = await this.props.addCampus(campus);
        console.log(newCampus)
        // Update state, and trigger redirect to show the new student
        this.setState({
          name: "", 
          address: "", 
          campusId: null, 
          redirect: true,
          imageUrl: "", 
          redirectId: newCampus.id
        });
      }
    
      // Unmount when the component is being removed from the DOM:
      componentWillUnmount() {
          this.setState({redirect: false, redirectId: null});
      }
    
      // Render new student input form
      render() {
        // Redirect to new student's page after submit
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
    
        // Display the input form via the corresponding View component
        return (
          <div>
            <Header />
            <NewCampusView 
              handleChange = {this.handleChange} 
              handleSubmit={this.handleSubmit}      
            />
          </div>          
        );
      }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(NewCampusContainer);