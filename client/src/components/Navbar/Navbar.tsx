import { useState, ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";
import { useTheme } from "@mui/material/styles";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Logout,
  Home,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import { Main, AppBar, DrawerHeader, Drawer, NavItem } from "./styles";

const drawerWidth = 240;

const menuItems = [
  { icon: <Home />, label: "Home", path: "/" },
  { icon: <Settings />, label: "Settings", path: "/settings" },
];

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} width={drawerWidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            FitNotes
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        width={drawerWidth}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <NavItem disablePadding key={item.label}>
              <ListItemButton
                component={Link}
                selected={location.pathname === item.path}
                to={item.path}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </NavItem>
          ))}

          <NavItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon sx={{ color: "inherit" }}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </NavItem>
        </List>
      </Drawer>

      <Main open={open} width={drawerWidth}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
