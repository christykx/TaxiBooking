import { Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';

function ViewBooking() {

    const { bookingDetails } = useContext(PostContext)
    const [price, setprice] = useState('');

    const navigate=useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(price).length === 0 ) {
      alert("Please fill the form properly!");

    }
  
        axios.post('http://localhost:3001/users/addprice',{
            price:price,
            userid:bookingDetails._id,
            // time:bookingDetails.time,
            drivername:"driver"

        }).then((response) => {
        if (response?.status) {

            navigate('/driver')

        } else {
            console.log("erorr")
        }

    }).catch((err) => {
        console.log(err);
        alert(err.response.data)
        console.log("-----errrrr---", err);
    })


  };

    useEffect(() => {

        const { } = bookingDetails
        console.log("booking Details details  view single user page");
        console.log(bookingDetails);

    }, [])
    return (
        <div style={{ display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        height:' 100vh'
         }}>

                <h4 >Username: {bookingDetails.username}</h4>
                {<br />}
                <h4 >Origin: {bookingDetails.origin}</h4>
                {<br />}
                <h4 >Destination: {bookingDetails.destination}</h4>
                {<br />}
                <h4 >Pickup Time: {bookingDetails.time}</h4>
                <form >
                    <Stack direction="column">
                        <TextField
                            margin="normal"
                            required
                            style={{ width: '30vh' }}
                            name="price"
                            value={price} onChange={(e) => setprice(e.target.value)}
                            label="price"
                            type="number"
                            id="price"
                        />
                        <Button onClick={handleSubmit} type="submit" style={{ backgroundColor: 'green', width: '30vh' }} variant="contained">Confirm</Button>
                    </Stack>
                </form>

        </div>
    )
}

export default ViewBooking