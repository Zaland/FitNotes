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
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Main, AppBar, DrawerHeader, Drawer } from "./styles";

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
            <ListItem disablePadding key={item.label}>
              <ListItemButton
                component={Link}
                selected={location.pathname === item.path}
                to={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}

          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Main open={open} width={drawerWidth}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};
