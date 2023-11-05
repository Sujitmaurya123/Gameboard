import {
  Dashboard,
  PersonOutline,
  EmojiEvents,
  LocalActivity,
  SportsEsports,
  SwapHoriz,
  ManageAccounts,
  MilitaryTech
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
 
} from "@mui/material";
import React from "react";


const StyledListItemIcon =styled(ListItemIcon)({
    color:"white"
})

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" },color:"white" } } bgcolor="black" >
      <Box 
      // position="fixed"
      >
        <List >
          <ListItem disablePadding>
            <ListItemButton component="a" href="#dashboard" >
              <StyledListItemIcon >
                < Dashboard/ >
              </StyledListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#users">
              <StyledListItemIcon >
                <PersonOutline />
              </StyledListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#tournaments">
              <StyledListItemIcon>
                <EmojiEvents />
              </StyledListItemIcon>
              <ListItemText primary="Tournaments" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="integers">
              <StyledListItemIcon>
                <LocalActivity />
              </StyledListItemIcon>
              <ListItemText primary="Integers" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#games">
              <StyledListItemIcon>
                <SportsEsports />
              </StyledListItemIcon>
              <ListItemText primary="Games" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#data">
              <StyledListItemIcon>
                <SwapHoriz />
              </StyledListItemIcon>
              <ListItemText primary="Data" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#roles">
              <StyledListItemIcon>
                <ManageAccounts />
              </StyledListItemIcon>
              <ListItemText primary="Roles" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#awards">
              <StyledListItemIcon>
                <MilitaryTech />
              </StyledListItemIcon>
              <ListItemText primary="Awards" />
            </ListItemButton>
          </ListItem>
         
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;