import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const NuevoRegistro = ({ open, handleDialog }) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Nuevo Registro</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" width={500}>
          {/* <TextField id="detalle" variant="contained" /> */}
          <TextField
            id="detalle"
            label="Detalle"
            color="primary"
            variant="standard"
            required
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleDialog} variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleDialog} variant="contained" autoFocus>
          Agregar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NuevoRegistro;
