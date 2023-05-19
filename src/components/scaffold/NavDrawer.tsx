import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Typography,
  Toolbar,
} from "@mui/material";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";

export default function NavDrawer() {
  return (
    <BrowserRouter>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant={"h6"} noWrap>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={true}>
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
      <main>
        <Routes>
          <Route path="/form" element={<ContactForm />} />
          <Route path="/grid" element={<ContactCardGrid />} />
          <Route path="/table" element={<ContactTable />} />
          <Route path="/datagrid" element={<ContactDataGrid />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
