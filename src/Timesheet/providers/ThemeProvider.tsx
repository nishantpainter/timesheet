import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  Theme,
} from "@material-ui/core/styles";

type ThemeProviderProps = {};

const theme: Theme = createMuiTheme({});

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
