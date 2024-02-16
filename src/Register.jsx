import { TextField, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';


export default function Register() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const SERVER_ENDPOINT = "http://localhost:8080/api/v1/users/new";
        try {
            const response = await axios.post(SERVER_ENDPOINT, formData);
            // console.log(response.data.message)
            if (response.data.message) {
                toast.success(response.data.message);
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                })
            }
        } catch (error) {
            // console.log("Error has occured", error);
            toast.error(error.message)
        }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData((preState) => ({
            ...preState,
            [name]: value
        }));
    }

    return (
        <>
            <h2 style={{fontFamily:"sans-serif"}}>Register Now</h2>
            <div>
                <Grid container justifyContent="center">
                    <Grid item xs={6}>
                        <Paper style={{ padding: 20 }}>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    name='username'
                                    value={formData.username}
                                    onChange={handleInput}
                                />
                                <TextField
                                    label="email"
                                    variant="outlined"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInput}
                                />
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    margin="normal"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInput}
                                />
                                <Button variant="contained" color="primary" type='submit' fullWidth>
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
