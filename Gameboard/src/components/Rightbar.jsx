import { Box} from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import TableData from './TableData'

const Rightbar = () => {
  return (
    <Box  flex={6} p={2}>
        
            <Navbar/>

            <TableData/>
        </Box>
  )
}

export default Rightbar