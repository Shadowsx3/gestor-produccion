import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const theme = createTheme({
    palette: {
      text: {
        primary: "#000346",
        secondary: "#000346",
      },
      primary: {
        main: "#000346",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
