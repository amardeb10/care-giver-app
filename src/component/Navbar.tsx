import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import { Accessibility } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/menu";
import React, { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";

function Navbar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

  const pages = ["Home", "Quiz", "Activity", "Logout"];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Accessibility />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          Care Provider
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button color="inherit">
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link style={{ textDecoration: "none", color: "white" }} to="/quiz">
              Quiz
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/activity"
            >
              Activity
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/Logout"
            >
              Logout
            </Link>
          </Button>
          {/* <Button color="inherit">Activity</Button>
          <Button color="inherit">Logout</Button> */}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            sx={{ display: { xs: "flex", md: "none" } }}
            onClose={closeMenu}
          >
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Quiz</MenuItem>
              {/* <MenuItem>Activity</MenuItem>
              <MenuItem>Logout</MenuItem> */}
            </MenuList>
          </Menu>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          Care Provider
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
