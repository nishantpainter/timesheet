import React from "react";
import Typography from "@material-ui/core/Typography";
import ThemeProvider from "./providers/ThemeProvider";

type TimeSheetProps = {};

const Timesheet: React.FC<TimeSheetProps> = () => {
  return (
    <ThemeProvider>
      <Typography>Timesheet</Typography>
    </ThemeProvider>
  );
};

export default Timesheet;
