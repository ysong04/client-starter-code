import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    formContainer: {
        width: '500px',
        backgroundColor: '#f0f0f5',
        borderRadius: '5px',
        margin: 'auto',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none'
    },
    customizeAppBar: {
        backgroundColor: '#11153e',
        shadows: ['none'],
    },
    formTitle: {
        backgroundColor: '#c5c8d6',
        marginBottom: '15px',
        textAlign: 'center',
        borderRadius: '5px 5px 0px 0px',
        padding: '3px'
    },
}));
function NewCampusView(props) {
    const { handleChange, handleSubmit } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <div className={classes.formTitle}>
                    <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                        Add a Campus
                    </Typography>
                </div>
                <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
                    <input type="text" name="name" required onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
                    <input type="text" name="address" required onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
                    <input type="text" name="description" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>ImageUrl: </label>
                    <input type="text" defaultValue = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/54462380_2313175188727790_4347036481609531392_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=W2Ttb9yfMHcAX8Pkf11&_nc_ht=scontent-lga3-1.xx&oh=00_AfA5qt1Psqnh47ORzEGNVy7MJfRwWu5MRWwG4lTqwWlfmg&oe=63C89672" name="imageUrl" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default NewCampusView