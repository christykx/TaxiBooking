import React, { useContext, useState } from 'react'
import {
    TextField,
    Button,
} from "@material-ui/core";
import './BookingForm.css'
import { Stack } from '@mui/system';
import bgimg from './f.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../authContext/AuthContext';


function BookingForm() {

    const navigate = useNavigate();

    const [origin, setorigin] = useState('');
    const [destination, setdestination] = useState('');
    const [time, settime] = useState('');
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser);
    const userid = currentUser?.user?._id
    const username = currentUser?.user?.username

    const handleSubmit = (event) => {

        event.preventDefault();
        if (Object.keys(origin, destination, time).length === 0) {
            alert("Please fill the form properly!");

        }

        axios.post('http://localhost:3001/users/book', {
            origin: origin,
            destination: destination,
            time: time,
            userid:userid,
            username:username
        }).then((response) => {
            if (response?.status) {

                navigate('/')

            } else {
                console.log("erorr")
            }

        }).catch((err) => {
            console.log(err);
            alert(err.response.data)
            console.log("-----errrrr---", err);
        })


    };

    return (
        <div className='formstyle'>
            <Stack direction="column" justifyContent="center" alignItems="center" spacing={0.5}>
                <form style={{ padding: '5px' }} onSubmit={handleSubmit} >
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Origin"
                        name="origin"
                        value={origin} onChange={(e) => setorigin(e.target.value)}
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Destination"
                        name="destination"
                        value={destination} onChange={(e) => setdestination(e.target.value)}
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        style={{ width: "200px", margin: "5px" }}
                        type="text"
                        label="Pickup Time"
                        name="time"
                        value={time} onChange={(e) => settime(e.target.value)}
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary">
                        Book Now
                    </Button>
                </form>

                <img src={bgimg} style={{ height: '200px', width: '100vh' }} ></img>
            </Stack>


        </div>
    )
}

export default BookingForm