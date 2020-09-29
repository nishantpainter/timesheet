import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import TimesheetLine from "./TimesheetLine";
import { Line } from "../types";

type TimesheetLineListProps = {
  lines: Line[];
  onDelete: any;
  onChange: any;
};

const useStyles = makeStyles((theme) => ({
  listWrapper: {
    padding: theme.spacing(),
    height: `calc(100% - ${theme.spacing(6)}px)`,
    overflow: "auto",
  },
}));

const TimesheetLineList: React.FC<TimesheetLineListProps> = (props) => {
  const classes = useStyles();

  const { lines, onDelete, onChange } = props;
  return (
    <Box className={classes.listWrapper}>
      <Grid container spacing={1}>
        {lines.map((line) => (
          <Grid item xs={12} key={line.id}>
            <TimesheetLine
              line={line}
              onDelete={onDelete}
              onChange={onChange}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TimesheetLineList;
