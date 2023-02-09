import React from 'react'
import Banner from '../Components/Banner/Banner'
import Topbar from '../Components/Topbar/Topbar'
import { Box } from "@mui/material"


function Homepage() {

  return (
    <Box>
      <Topbar />
      <Banner />
    </Box>
  )
}

export default Homepage
