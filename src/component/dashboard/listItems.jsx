import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import QuizIcon from '@mui/icons-material/Quiz';
export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NotificationAddIcon />
      </ListItemIcon>
      <ListItemText primary="Acitivity" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QuizIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Community" />
    </ListItemButton>
  </React.Fragment>
);

