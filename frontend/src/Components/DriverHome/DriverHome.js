import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Card, TextField, Toolbar } from '@mui/material';
import axios from 'axios';
import { Stack } from '@mui/system';
import { PostContext } from '../../store/PostContext';
import { useNavigate } from 'react-router-dom';

function DriverHome() {

    const navigate=useNavigate()

    // const [usernames, setusernames] = useState('') 
    const [bookings, setbookings] = useState('')
    const [searches, setSearches] = useState('')
    const { setBookingDetails } = useContext(PostContext) 


    const searchUsers = () => {


        axios.get('http://localhost:3001/users/getallbooking').then((response) => {

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

    }




    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));


    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    return (
        <div className='container' style={{ marginTop: '5px' }}>

            {/* <Toolbar> */}   
            {/* <Search> */}
            <Stack direction="row">
                <Button onClick={searchUsers} >
                    <SearchIconWrapper>
                        <SearchIcon type='submit' />
                    </SearchIconWrapper>
                </Button>

                <TextField
                    // margin="normal"
                    style={{width:'80vh'}}
                    id="standard-basic"
                    variant="standard"
                    fullWidth
                    name="searches"
                    value={searches}
                    onChange={(e) => setSearches(e.target.value)}
                    label="Type current location..."
                    // type="search"
                    autoComplete="searches"
                />

            </Stack>

            {/* </Search> */}



            <Card style={{ marginLeft:'60px',overflowY:'scroll',width:'80vh',height:'75vh'}} >
                {bookings && bookings.map((user, index) => {

                    return <div key={user._id} >


                        {(searches.trim().toLowerCase().includes(`${user.origin}`.toLowerCase())) &&
                            <Card style={{ border: '2px solid grey', cursor: 'pointer' }} onClick={() => {
                                setBookingDetails(user)
                                navigate('/viewbookings')
                            }} >


                                <Stack direction="column">
                                    <h4 style={{color:'grey'}}>Username: {user.username}</h4>
                                    {<br />}
                                    <h4 style={{color:'black'}}>Origin: {user.origin}</h4>   
                                    {<br />}
                                    <h4 style={{color:'grey'}}>Destination: {user.destination}</h4>    
                                    {<br />}
                                    <h4 style={{color:'grey'}}>Pickup Time: {user.time}</h4>    

                                </Stack>

                            </Card>
                        }

                        <br />

                    </div>


                })}

            </Card>

            {/* </Toolbar> */}




            {/* <TextField
                                // margin="normal"
                                id="standard-basic"
                                variant="standard" 
                                fullWidth
                                name="searches"
                                value={searches}
                                onChange={(e) => setSearches(e.target.value)}
                                label="Type current location..."
                                // type="search"
                                autoComplete="searches"
                            /> */}
        </div>
    )
}

export default DriverHome