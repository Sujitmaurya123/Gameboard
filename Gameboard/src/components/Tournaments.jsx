import { Box} from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Card from './Card';
const Tournaments = () => {
  return (
    <Box>
    <Box  flex={6} p={5} bgcolor="black" sx={{color:"white",display:"flex"}}>
        <ArrowBackIcon/>    Tournament Details
    </Box>
    <Box  flex={6} p={2}>
      <Card/>
       <Card/>
        <Card/>
         
    </Box>
    </Box>
  )
}

export default Tournaments
