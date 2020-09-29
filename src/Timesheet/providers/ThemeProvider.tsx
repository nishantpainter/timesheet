import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  Theme,
} from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import blueGrey from "@material-ui/core/colors/blueGrey";

import StorageService from "../services/StorageService";

const ThemeContext = React.createContext({});

type ThemeProviderProps = {};

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [darkTheme, setDarkTheme] = React.useState(
    StorageService.getDarkMode()
  );

  const handleToggleDarkTheme = React.useCallback(() => {
    setDarkTheme((darkTheme: Boolean) => {
      StorageService.setDarkMode(!darkTheme);
      return !darkTheme;
    });
  }, []);

  const theme: Theme = createMuiTheme({
    palette: {
      type: darkTheme ? "dark" : "light",
      primary: teal,
      secondary: blueGrey,
    },
  });

  const value = React.useMemo(
    () => ({
      handleToggleDarkTheme,
    }),
    [handleToggleDarkTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): any => React.useContext(ThemeContext);

export default ThemeProvider;
