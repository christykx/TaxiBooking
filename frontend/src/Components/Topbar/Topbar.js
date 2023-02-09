import { Stack, Typography } from '@mui/material'
import React from 'react'
// import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import taxiimg from './route.png'
import { useNavigate } from 'react-router-dom'



function Topbar() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        window.location.reload(false);
        navigate('/login')
    }


    return (
        <div style={{ backgroundColor: 'black', padding: '10px' }}>
            <Stack direction="row" justifyContent="space-between" gap={3}>
                {/* <LocalTaxiIcon style={{ color: 'yellow' }} /> */}
                <img alt="logo" style={{ width: '40px', height: '40px', cursor: 'pointer' }} onClick={() => { navigate('/') }} src={taxiimg}></img>
             
                <Stack direction="row" justifyContent="flex-end" gap={3}>
                    <Typography style={{ color: 'yellow', marginTop: '10px', cursor: 'pointer' }}  onClick={() => { navigate('/booknow') }} >Book Now</Typography>
                    {/* <Typography style={{ color: 'yellow', marginTop: '10px', cursor: 'pointer' }} onClick={() => { navigate('/login') }} >Login</Typography> */}
                    <Typography style={{ color: 'yellow', marginTop: '10px', cursor: 'pointer' }} onClick={logout}  >Logout</Typography>
              
                </Stack>

            </Stack>
        </div>
    )
}

export default Topbar