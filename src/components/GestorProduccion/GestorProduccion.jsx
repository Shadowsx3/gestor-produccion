import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import NuevoRegistro from "../NuevoRegistro/NuevoRegistro";
import "./GestorProduccion.scss";

const GestorProduccion = () => {
  const [handleNewRecord, setHandleNewRecord] = useState(false);

  return (
    <div className="gestor-produccion">
      <Typography variant="h4" component="h4" style={{ marginBottom: "10px" }}>
        Gestor Producción
      </Typography>
      <Divider variant="middle" style={{ marginBottom: "10px" }} />
      <div className="gestor-produccion__button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setHandleNewRecord(true)}
        >
          Nuevo Registro
        </Button>
      </div>
      <NuevoRegistro
        open={handleNewRecord}
        handleDialog={() => setHandleNewRecord(false)}
      />
    </div>
  );
};

export default GestorProduccion;
