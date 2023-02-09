import { Stack, Typography } from '@mui/material'
import React from 'react'
// import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import taxiimg from './route.png'
import { useNavigate } from 'react-router-dom'



function DriverTopbar() {
    const navigate = useNavigate()

    return (
        <div style={{ backgroundColor: 'black', padding: '10px' }}>
            <Stack direction="row" justifyContent="space-between" gap={3}>
                {/* <LocalTaxiIcon style={{ color: 'yellow' }} /> */}
                <img alt="logo" style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={() => { navigate('/driver') }} src={taxiimg}></img>

                <Stack direction="row" justifyContent="flex-end" gap={3}>
                    {/* <Typography style={{ color: 'yellow', marginTop: '10px', cursor: 'pointer' }}  onClick={() => { navigate('/booknow') }} >Book Now</Typography> */}
                    {/* <Typography style={{ color: 'yellow', marginTop: '10px', cursor: 'pointer' }} onClick={() => { navigate('/login') }} >Login</Typography> */}
                    <Typography style={{ color: 'yellow', marginTop: '10px', cursor: 'pointer' }}  onClick={() => { navigate('/driverlogin') }} >Logout</Typography>
              
                </Stack>

            </Stack>
        </div>
    )
}

export default DriverTopbar