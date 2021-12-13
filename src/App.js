import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      background: "#ece9ec"
    }
  },
  input: {
    color: "#482642"
  }
}));

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#482642"
    }
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={outerTheme}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            InputProps={{
              className: classes.input
            }}
          />
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </form>
      </ThemeProvider>
    </div>
  );
}
