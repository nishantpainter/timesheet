import React from "react";
import { v4 as uuid } from "uuid";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Line } from "../types";
import StorageService from "../services/StorageService";
import TimesheetLineList from "../components/TimesheetLineList";

type ListProps = {};

const defaultLines: Line[] = [];

const useStyles = makeStyles((theme) => ({
  button: { marginRight: theme.spacing() },
}));

const List: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  const [lines, setLines] = React.useState(defaultLines);

  const fetchLines = () => {
    const lines = StorageService.getLines();
    if (lines && lines.length) {
      setLines(lines);
    }
  };

  const handleAddNewLine = React.useCallback(() => {
    setLines((lines: Line[]) => [
      ...lines,
      { id: uuid(), title: "", hours: "" },
    ]);
  }, []);

  const handleDeleteAllLines = React.useCallback(() => {}, []);

  const handleDeleteLine = React.useCallback((event, line) => {
    setLines((lines) => lines.filter((l) => l.id !== line.id));
  }, []);

  const handleChangeLine = React.useCallback((event, line) => {
    const { name, value } = event.target;

    const declarativeTimeRegex = /^\d*\.?[0-5]?((?<=[0-5])[0-9]?)?$/;

    if (name === "hours" && !declarativeTimeRegex.test(value)) {
      return;
    }
    setLines((lines) => {
      return lines.map((l) =>
        l.id === line.id ? { ...line, [name]: value } : l
      );
    });
  }, []);

  React.useEffect(() => fetchLines(), []);

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
