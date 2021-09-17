import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import React from "react";

const AdministracionUsuario = () => {
  let history = useHistory();

  const signOut = () => {
    history.push("/");
  };

  return (
    <div>
      <Typography variant="h4" component="h4" style={{ marginBottom: "10px" }}>
        Opciones
      </Typography>
      <Divider variant="middle" style={{ marginBottom: "10px" }} />
      <Button variant="text" color="primary" onClick={signOut}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default AdministracionUsuario;
