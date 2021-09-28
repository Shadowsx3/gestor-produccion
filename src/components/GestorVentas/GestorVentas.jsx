import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import NuevoRegistro from "./NuevaVenta/NuevaVenta";
import "./GestorVentas.scss";

const GestorVentas = () => {
  const [handleNewRecord, setHandleNewRecord] = useState(false);
  const [ventasRecords, setventasRecords] = useState([]);

  const addItem = (newItem) => {
    console.log("llega al rerender");
    setventasRecords([...ventasRecords, newItem]);
  };

  useEffect(() => {
    const localStorageventasRecords = JSON.parse(
      localStorage.getItem("ventasRecords")
    );
    if (localStorageventasRecords) {
      setventasRecords(localStorageventasRecords);
    }
  }, []);

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
      <div className="gestor-produccion__datos">
        {ventasRecords.length ? (
          <div>
            {ventasRecords.map((item) => (
              <div key={item.id}>
                Detalle: {item.detalle} | Cantidad: {item.cantidad}
              </div>
            ))}
          </div>
        ) : (
          <div>No hay registros disponibles</div>
        )}
      </div>
      <NuevoRegistro
        open={handleNewRecord}
        handleDialog={() => setHandleNewRecord(false)}
        addItem={addItem}
      />
    </div>
  );
};

export default GestorVentas;
