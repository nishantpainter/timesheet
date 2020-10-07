import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { Line } from "../types";
import IconButton from "../components/IconButton";

const useStyles = makeStyles((theme) => ({
  deleteButton: {
    marginTop: theme.spacing(0.5),
  },
}));

type TimesheetLineProps = {
  line: Line;
  onDelete: any;
  onChange: any;
};

const TimesheetLine: React.FC<TimesheetLineProps> = (props) => {
  const { line, onDelete, onChange } = props;

  const classes = useStyles();
  
  const handleDelete = React.useCallback(
    (e) => {
      onDelete(e, line);
    },
    [line, onDelete]
  );

  const handleChange = React.useCallback(
    (e) => {
      e.persist();
      onChange(e, line);
    },
    [line, onChange]
  );

  return (
    <Grid container spacing={1} alignItems="flex-start">
      <Grid item xs={8} sm={9}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Title"
          name="title"
          value={line.title}
          onChange={handleChange}
          multiline
          fullWidth
        />
      </Grid>
      <Grid item xs={3} sm={2}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Hours"
          name="hours"
          value={line.hours}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={1} sm={1}>
        <IconButton
          icon="delete"
          color="secondary"
          className={classes.deleteButton}
          onClick={handleDelete}
        ></IconButton>
      </Grid>
    </Grid>
  );
};

export default TimesheetLine;
