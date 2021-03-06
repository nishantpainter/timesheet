import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: { marginRight: theme.spacing() },
}));

type TimesheetLineControlProps = {
  onAdd: any;
  onDelete: any;
};

const TimesheetLineControl: React.FC<TimesheetLineControlProps> = (props) => {
  const { onAdd, onDelete } = props;

  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      height={32}
      marginBottom={1}
      padding={1.5}
    >
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={onAdd}
      >
        Add
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        onClick={onDelete}
      >
        Delete
      </Button>
    </Box>
  );
};

export default TimesheetLineControl;
