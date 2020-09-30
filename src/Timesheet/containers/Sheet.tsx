import React from "react";

import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useStore } from "../providers/StoreProvider";
import TimesheetLineList from "../components/TimesheetLineList";

type ListProps = {};

const useStyles = makeStyles((theme) => ({
  button: { marginRight: theme.spacing() },
}));

const List: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  const {
    lines = [],
    handleAddNewLine,
    handleChangeLine,
    handleDeleteLine,
    handleDeleteAllLines,
  } = useStore();

  const totalHours = lines.reduce(
    (totalHours, line) => totalHours + Number(line.hours || 0),
    0
  );

  return (
    <>
      <Box display="flex" alignItems="center" height={40} marginBottom={1}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
          onClick={handleAddNewLine}
        >
          Add Line
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
          onClick={handleDeleteAllLines}
        >
          Delete All Lines
        </Button>
        <Typography>
          Total Hours : <b>{totalHours.toFixed(2)}</b>
        </Typography>
      </Box>
      <TimesheetLineList
        lines={lines}
        onDelete={handleDeleteLine}
        onChange={handleChangeLine}
      />
    </>
  );
};

export default List;
