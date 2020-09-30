import React from "react";

import Content from "./containers/Content";
import Toolbar from "./containers/Toolbar";
import ThemeProvider from "./providers/ThemeProvider";
import StoreProvider from "./providers/StoreProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

type TimeSheetProps = {};

const Timesheet: React.FC<TimeSheetProps> = () => {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <StoreProvider>
          <Toolbar />
          <Content />
        </StoreProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Timesheet;
