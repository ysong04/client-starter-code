import { Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editStudentThunk } from '../../store/thunks';
import Header from './Header'

// const keys = new URLSearchParams(window.location.search);
// console.log(keys.get("id"))

class EditStudentContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            campusId: "",
            firstname: "",
            lastname: "",
            image: "",
            gpa: "",
            email: "",
            redirect: false
        };
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }

    handleEdit = async (e) => {
        e.preventDefault();
        const response = await this.props.editStudent(this.state)
        console.log(response)
        if (response) {
            this.setState({
                campusId: "",
                firstname: "",
                lastname: "",
                image: "",
                gpa: "",
                email: "",
                redirect: true
            })
        }
    }

    componentWillUnmount() {
        this.setState({
            redirect: false,
        });
    }
    componentDidMount() {
        let { firstname, lastname, image, gpa, email,id, campusId } = localStorage.getItem("CurrentStudent") ? JSON.parse(localStorage.getItem("CurrentStudent")) : { firstname: "", lastname: "", image: "", gpa: "", email: "", id:"", campusId:""}
        this.setState({
            ...this.state,
            campusId,
            id,
            firstname,
            lastname,
            image,
            gpa,
            email,
        });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/students`} />)
        }
        return (
            <>
                <Header />
                <form style={{ textAlign: 'center' }} onSubmit={this.handleEdit}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>FirstName: </label>
                    <input type="text" required value={this.state.firstname} name="firstname" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>LastName: </label>
                    <input type="text" required value={this.state.lastname} name="lastname" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>ID: </label>
                    <input type="text" required value={this.state.campusId} name="campusId" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email: </label>
                    <input type="text" required value={this.state.email} name="email" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image: </label>
                    <input type="text" required value={this.state.image} name="image" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA: </label>
                    <input type="text" required value={this.state.gpa} name="gpa" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                    <br />
                    <br />
                </form>
            </>

        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        editStudent: (campus) => dispatch(editStudentThunk(campus))
    };
};

export default connect(null, mapDispatch)(EditStudentContainer);