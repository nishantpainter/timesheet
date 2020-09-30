import React from "react";

import Content from "./containers/Content";
import Toolbar from "./containers/Toolbar";
import ThemeProvider from "./providers/ThemeProvider";
import StoreProvider from "./providers/StoreProvider";

type TimeSheetProps = {};

const Timesheet: React.FC<TimeSheetProps> = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <Toolbar />
        <Content />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default Timesheet;
