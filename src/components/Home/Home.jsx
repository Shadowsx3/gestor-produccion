import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GestorProduccion from "../GestorProduccion/GestorProduccion";
import GestorVentas from "../GestorVentas/GestorVentas";
import AdministracionUsuario from "../AdministracionUsuario/AdministracionUsuario";
import "./Home.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="Gestor Producción" {...a11yProps(0)} />
            <Tab label="Gestor Ventas" {...a11yProps(1)} />
            <Tab label="Informes" {...a11yProps(2)} />
            <Tab label="Administración Usuario" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <GestorProduccion />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GestorVentas />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Informes
        </TabPanel>
        <TabPanel value={value} index={3}>
          <AdministracionUsuario />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Home;
