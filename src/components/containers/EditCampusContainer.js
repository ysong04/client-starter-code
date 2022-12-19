import { Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { editCampusThunk } from '../../store/thunks';
import Header from './Header'

// const keys = new URLSearchParams(window.location.search);
// console.log(keys.get("id"))

class EditCampusContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }

    handleEdit = async (e) => {
        e.preventDefault();
        const response = await this.props.editCampus(this.state)
        console.log(response)
        if (response) {
            this.setState({
                name: "",
                address: "",
                description: "",
                imageUrl: "",
                redirect: true
            })
        }

    }

    componentWillUnmount() {
        this.setState({ redirect: false });
    }
    componentDidMount() {
        let { name, address, description, imageUrl,id } = localStorage.getItem("CurrentCampus") ? JSON.parse(localStorage.getItem("CurrentCampus")) : { name: "", address: "", description: "", imageUrl: "",id:"" }
        this.setState({
            ...this.state,
            id,
            name,
            address,
            description,
            imageUrl,
        });
    }
    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/campuses`} />)
        }
        return (
            <>
                <Header />
                <form style={{ textAlign: 'center' }} onSubmit={this.handleEdit}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
                    <input type="text" required value={this.state.name} name="name" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
                    <input type="text" required value={this.state.address} name="address" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
                    <input type="text" required value={this.state.description} name="description" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>ImageUrl: </label>
                    <input type="text" required value={this.state.imageUrl} name="imageUrl" onChange={(e) => this.handleChange(e)} />
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
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    };
};

export default connect(null, mapDispatch)(EditCampusContainer);