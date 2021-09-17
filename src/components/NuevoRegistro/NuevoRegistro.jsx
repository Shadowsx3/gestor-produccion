import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const NuevoRegistro = ({ open, handleDialog, addItem }) => {
  const BASE_FORM_FIELDS = {
    detalle: {
      value: "",
      error: false,
      errorText: "",
    },
    cantidad: {
      value: "",
      error: false,
      errorText: "",
    },
  };

  const [formFields, setFormFields] = useState({ ...BASE_FORM_FIELDS });

  const handleClose = () => {
    setFormFields({ ...BASE_FORM_FIELDS });
    handleDialog();
  };

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: {
        value: e.target.value,
        error: false,
        errorText: "",
      },
    });
  };

  const submitItem = (e) => {
    e.preventDefault();
    const {
      detalle: { value: detalleValue },
      cantidad: { value: cantidadValue },
    } = formFields;

    let hasEmptyDetalleError = false;
    let hasEmptyCantidadError = false;

    let emptyDetalleErrorMessage = "";
    let emptyCantidadErrorMessage = "";

    if (detalleValue.trim() === "") {
      hasEmptyDetalleError = true;
      emptyDetalleErrorMessage = "El campo no puede ser vacío";
    }
    if (cantidadValue.trim() === "") {
      hasEmptyCantidadError = true;
      emptyCantidadErrorMessage = "El campo no puede ser vacío";
    }
    const hasErrors = hasEmptyDetalleError || hasEmptyCantidadError;

    if (hasErrors) {
      setFormFields({
        cantidad: {
          ...formFields.cantidad,
          error: hasEmptyDetalleError,
          errorText: emptyDetalleErrorMessage,
        },
        detalle: {
          ...formFields.detalle,
          error: hasEmptyCantidadError,
          errorText: emptyCantidadErrorMessage,
        },
      });
    } else {
      const newRecord = { detalle: detalleValue, cantidad: cantidadValue };
      const productionRecords = localStorage.getItem("productionRecords");

      if (!productionRecords) {
        const newProductionRecords = JSON.stringify([
          {
            id: 1,
            ...newRecord,
          },
        ]);
        localStorage.setItem("productionRecords", newProductionRecords);
      } else {
        const parsedProductionRecords = JSON.parse(productionRecords);
        const newItem = {
          id: parsedProductionRecords.length + 1,
          ...newRecord,
        };
        const newProductionRecords = JSON.stringify([
          ...parsedProductionRecords,
          newItem,
        ]);
        localStorage.setItem("productionRecords", newProductionRecords);
        addItem(newItem);
        handleClose();
      }
    }
  };

  const {
    cantidad: {
      value: cantidadValue,
      error: cantidadError,
      errorText: cantidadErrorText,
    },
    detalle: {
      value: detalleValue,
      error: detalleError,
      errorText: detalleErrorText,
    },
  } = formFields;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Nuevo Registro</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" width={500}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* <Item>xs=8</Item> */}
              <TextField
                id="detalle"
                label="Detalle"
                color="primary"
                variant="standard"
                value={detalleValue}
                error={detalleError}
                helperText={detalleErrorText}
                onChange={handleFormFields}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="cantidad"
                label="Cantidad"
                color="primary"
                variant="standard"
                value={cantidadValue}
                error={cantidadError}
                helperText={cantidadErrorText}
                onChange={handleFormFields}
                required
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={submitItem} variant="contained" autoFocus>
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NuevoRegistro;
