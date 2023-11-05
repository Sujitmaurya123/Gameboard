
import { AppBar,  Toolbar ,Box,InputBase,styled, Button, ListItemIcon} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { DateRange,ChevronRight } from '@mui/icons-material';
import {  blueGrey } from '@mui/material/colors';


const StyledToolbar1 =styled(Toolbar)({
    display:"flex",
    justifyContent:"center"
})
const StyledToolbar2 =styled(Toolbar)({
    display:"flex",
    justifyContent:"row"
})

const Search1 = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 15px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Search2 = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 15px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  gap: "10px",
  
}));



const Navbar = () => {
  return (
    <>
     <AppBar position='static'  sx={{backgroundColor:"white"}}>
        <StyledToolbar1>
            <Button variant="contained" sx={{backgroundColor:blueGrey[900]}} >Active Users</Button>
            <Button variant="contained" sx={{backgroundColor:blueGrey[50],color:"black"}}>Banned Users</Button>
            <Button variant="contained" sx={{backgroundColor:blueGrey[50],color:"black"}}>Suspicious Users</Button>
            <Button variant="contained" sx={{backgroundColor:blueGrey[50],color:"black"}}>Deleted Accounts</Button>
        
        </StyledToolbar1>
    </AppBar>
    <AppBar position='static'  sx={{backgroundColor:"white"}}>
        <StyledToolbar2>
            <ListItemIcon>
               <SearchIcon/>
              </ListItemIcon>
         <Search1>
          <InputBase placeholder="Search with Name, mail id, GT-id etc...." />
        </Search1>
            <Icons>

         <ListItemIcon>
               <DateRange/>
               <Search2>
          <InputBase placeholder="From date" />
        </Search2>
              </ListItemIcon>
                 <ListItemIcon>
               <DateRange/>
              </ListItemIcon>
              <Search2>
          <InputBase placeholder="To date" />
        </Search2>
        <ListItemIcon>
               <ChevronRight/>
              </ListItemIcon>
            </Icons>
        
        </StyledToolbar2>
    </AppBar>
    </>
  )
}

export default Navbar
