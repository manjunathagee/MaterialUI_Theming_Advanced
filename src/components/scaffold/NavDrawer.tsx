import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Typography,
  Toolbar,
} from "@mui/material";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme, Theme } from "@mui/material/styles";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginLeft: drawerWidth,
  },
};

export default function NavDrawer() {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={themedStyles(theme).appBar}>
        <Toolbar>
          <Typography variant={"h6"} noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={true}
        sx={simpleStyles.drawer}
        PaperProps={{ sx: simpleStyles.drawerPaper, elevation: 9 }}
      >
        <Toolbar />
        <List>
          {[
            { text: "Input Form", route: "/form" },
            { text: "Contact Card Grid", route: "/grid" },
            { text: "Contact Table", route: "/table" },
            { text: "Contact Data Grid", route: "/datagrid" },
          ].map((nav, index) => (
            <ListItem key={index}>
              <Link to={nav.route}>{nav.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={simpleStyles.content}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/form" element={<ContactForm />} />
          <Route path="/grid" element={<ContactCardGrid />} />
          <Route path="/table" element={<ContactTable />} />
          <Route path="/datagrid" element={<ContactDataGrid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
