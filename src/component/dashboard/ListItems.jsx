import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <Link style={{ textDecoration: "none", color: "blue" }} to="/activity">
      <ListItemButton>
        <ListItemIcon>
          <NotificationAddIcon />
        </ListItemIcon>

        <ListItemText primary="Acitivity"></ListItemText>
      </ListItemButton>
    </Link>
    <Link style={{ textDecoration: "none", color: "blue" }} to="/quiz">
      <ListItemButton>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Quiz"></ListItemText>
      </ListItemButton>
    </Link>
    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton> */}
    <Link style={{ textDecoration: "none", color: "blue" }} to="/chat">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Community" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
