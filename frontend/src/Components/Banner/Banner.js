import { Box, Button } from '@mui/material'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import './Banner.css'

function Banner() {

    const navigate = useNavigate();
    const [bookings, setbookings] = useState('')
    const { currentUser } = useContext(AuthContext)
    const id = currentUser?.user?._id

    console.log(currentUser);

    const payment = () => {

        navigate('/pay')

        axios.post('http://localhost:3001/users/deletedriverdata', {
            userid: id

        }).then((response) => {
            if (response?.status) {


            } else {
                console.log("erorr")
            }

        }).catch((err) => {
            console.log(err);
            alert(err.response.data)
            console.log("-----errrrr---", err);
        })



    }

    useEffect(() => {
        axios.get(`http://localhost:3001/users/getdriverdata/${id}`).then((response) => {

            if (response.status) {
                setbookings(response?.data)

            }
            else {
                alert("Something went wrong")
            }
        }).catch((err) => {
            console.log(err);
            alert(err.response.data)
            console.log("-----errrrr---", err.response.data);

        })

    }, []);

    return (
        <div className='container' >


            {bookings && bookings.length ?
                <>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: ' 100vh'
                    }}>
                        {bookings && bookings?.map((users, index) => {
                            return <div key={index}>

                                <h1>Driver Name: {users?.DriverData?.drivername}</h1>
                                <h1>Origin: {users?.origin}</h1>
                                <h1>Destination: {users?.destination}</h1>
                                <h1>Time: {users?.time}</h1>
                                <h1>Price: {users?.DriverData?.price}</h1>
                                <Button style={{ backgroundColor: 'green' }} onClick={payment} variant="contained" >Pay now</Button>

                            </div>

                        })}
                    </div>
                </>

                :

                <>
                    <Box className='bannerbg'>
                        <p style={{ color: 'white', position: 'absolute', top: '15%', width: '100%', fontSize: '40px', textAlign: 'center' }}>NEED A TAXI ?< br />
                            WE ARE HERE TO SERVE YOU 24X7
                        </p>
                    </Box>
                </>

            }



        </div>
    )
}

export default Banner