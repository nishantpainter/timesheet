import React from "react";

import Content from "./containers/Content";
import Toolbar from "./containers/Toolbar";
import ThemeProvider from "./providers/ThemeProvider";

type TimeSheetProps = {};

const Timesheet: React.FC<TimeSheetProps> = () => {
  return (
    <ThemeProvider>
      <Toolbar />
      <Content />
    </ThemeProvider>
  );
};

export default Timesheet;
