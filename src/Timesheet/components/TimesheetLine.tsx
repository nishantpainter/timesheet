import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { Line } from "../types";
import IconButton from "../components/IconButton";

type TimesheetLineProps = {
  line: Line;
  onDelete: any;
  onChange: any;
};

const TimesheetLine: React.FC<TimesheetLineProps> = (props) => {
  const { line, onDelete, onChange } = props;

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
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={7} sm={9}>
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
      <Grid item xs={4} sm={2}>
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
          onClick={handleDelete}
        ></IconButton>
      </Grid>
    </Grid>
  );
};

export default TimesheetLine;
