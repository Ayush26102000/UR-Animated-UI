import React from 'react';

// Importing for sidebar list
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// Importing for icons
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper', padding: '1rem 0', borderRight: '1px solid rgb(214, 214, 214);', height: '87.5vh' }}>
      <nav aria-label="main mailbox folders">
        <h1 style={{ padding: '.5rem 1rem' }}>Components</h1>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WallpaperIcon />
              </ListItemIcon>
              <Link to={'/'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Animated Backgrounds" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SmartButtonIcon />
              </ListItemIcon>
              <Link to={'/Buttons'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Buttons" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TextFieldsIcon />
              </ListItemIcon>
              <Link to={'/Textfield'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Text Field" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CheckBoxIcon />
              </ListItemIcon>
              <Link to={'/Checkbox'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Checkbox" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RadioButtonCheckedIcon />
              </ListItemIcon>
              <Link to={'/RadioButton'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Radio Button" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ToggleOnIcon />
              </ListItemIcon>
              <Link to={'/ToggleButton'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Toggle Button" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <Link to={'/Search'} style={{ textDecoration: 'none', color: '#000' }}>
                <ListItemText primary="Search" /></Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Sidebar