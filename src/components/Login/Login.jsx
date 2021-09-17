import React, { useState } from "react";
import shlogo2 from "../../shlogo2.png";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Login.scss";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [formFields, setFormFields] = useState({
    userName: {
      value: "",
      error: false,
      errorText: "",
    },
    password: {
      value: "",
      error: false,
      errorText: "",
    },
  });
  const [credentialsError, setCredentialsError] = useState(false);

  const handleFormFields = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: {
        value: e.target.value,
        error: false,
        errorText: "",
      },
    });
    setCredentialsError(false);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const {
      userName: { value: userNameValue },
      password: { value: passwordValue },
    } = formFields;

    let hasEmptyUserNameError = false;
    let hasEmptyPasswordError = false;
    let wrongCredentialesError = false;

    let emptyUserNameErrorMessage = "";
    let emptyPasswordErrorMessage = "";

    if (userNameValue.trim() === "") {
      hasEmptyUserNameError = true;
      emptyUserNameErrorMessage = "El campo no puede ser vacío";
    }
    if (passwordValue.trim() === "") {
      hasEmptyPasswordError = true;
      emptyPasswordErrorMessage = "El campo no puede ser vacío";
    }
    if (userNameValue.trim() !== "admin" || passwordValue.trim() !== "admin") {
      wrongCredentialesError = true;
    }
    const hasErrors =
      wrongCredentialesError || hasEmptyUserNameError || hasEmptyPasswordError;

    if (hasErrors) {
      setFormFields({
        userName: {
          ...formFields.userName,
          error: hasEmptyUserNameError,
          errorText: emptyUserNameErrorMessage,
        },
        password: {
          ...formFields.password,
          error: hasEmptyPasswordError,
          errorText: emptyPasswordErrorMessage,
        },
      });
      setCredentialsError(wrongCredentialesError);
    } else {
      history.push("/home");
    }
  };

  const {
    userName: {
      value: userNameValue,
      error: userNameError,
      errorText: userNameErrorText,
    },
    password: {
      value: passwordValue,
      error: passwordError,
      errorText: passwordErrorText,
    },
  } = formFields;

  return (
    <div className="login">
      <Paper elevation={1}>
        <Box sx={{ p: 10 }}>
          <img src={shlogo2} className="app-logo" alt="logo" />
          <div className="login__header">Salto Hortícola</div>
          <div className="login__header">Login</div>
          <div className="login__form">
            <div>
              <TextField
                id="userName"
                label="Usuario"
                color="primary"
                variant="standard"
                value={userNameValue}
                error={userNameError}
                helperText={userNameErrorText}
                required
                onChange={handleFormFields}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Contraseña"
                type="password"
                color="primary"
                variant="standard"
                value={passwordValue}
                error={passwordError}
                helperText={passwordErrorText}
                required
                onChange={handleFormFields}
              />
            </div>
            <div className="login__button">
              <Button
                onClick={(e) => submitLogin(e)}
                color="primary"
                variant="contained"
                fullWidth
              >
                Ingresar
              </Button>
            </div>
            <div className="login__invalid-credentials">
              {credentialsError && (
                <>
                  <div>Credenciales inválidas.</div>
                  <div>Por favor, intente nuevamente.</div>
                </>
              )}
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
