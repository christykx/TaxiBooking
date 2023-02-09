import React from 'react'
import Topbar from '../Components/Topbar/Topbar'

function Payment() {
    return (
        <div>
            <Topbar/>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: ' 100vh'
        }}>

            <h1 style={{ color: 'green' }}>Payment Successful!!</h1>
            <h4  style={{ color: 'grey' }}>Thank you for booking taxi</h4>
            <h4 style={{ color: 'grey' }}>Your payment was successful</h4>
            <img src='pay.webp' style={{ width: '70vh', height: '50vh' }}></img>

        </div>
        </div>
    )
}

export default Payment