import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import { useStore } from "../providers/StoreProvider";
import TimesheetLineList from "../components/TimesheetLineList";
import ImperativeTimeControl from "../components/ImperativeTimeControl";

const useStyles = makeStyles((theme) => ({
  button: { marginRight: theme.spacing() },
  imperativeFormControl: {
    marginRight: theme.spacing(0.5),
  },
}));

type ListProps = {};

const List: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  const {
    lines = [],
    imperative,
    handleAddNewLine,
    handleChangeLine,
    handleDeleteLine,
    handleDeleteAllLines: handleDeleteAllLinesStore,
    handleChangeImperative,
  } = useStore();

  const [confirmationDialogOpen, setConfirmationDialogOpen] = React.useState<
    boolean
  >(false);

  const handleOpenConfirmationDialog = React.useCallback(() => {
    if (!(lines && lines.length)) {
      return;
    }
    setConfirmationDialogOpen(true);
  }, [lines]);

  const handleCloseConfirmationDialog = React.useCallback(() => {
    setConfirmationDialogOpen(false);
  }, []);

  const handleDeleteAllLines = React.useCallback(() => {
    handleDeleteAllLinesStore();
    handleCloseConfirmationDialog();
  }, [handleDeleteAllLinesStore, handleCloseConfirmationDialog]);

  const totalHours = lines.reduce(
    (totalHours, line) => totalHours + (Number(line.hours) || 0),
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
          onClick={handleOpenConfirmationDialog}
        >
          Delete All Lines
        </Button>
        <Typography>
          Total Hours : <b>{totalHours.toFixed(2)}</b>
        </Typography>
      </Box>
      <ImperativeTimeControl
        checked={imperative}
        onChange={handleChangeImperative}
      />
      <TimesheetLineList
        lines={lines}
        onDelete={handleDeleteLine}
        onChange={handleChangeLine}
      />
      <Dialog
        open={confirmationDialogOpen}
        onClose={handleCloseConfirmationDialog}
      >
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
          <Typography>Do you want to delete all timesheet lines ?</Typography>
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={handleCloseConfirmationDialog}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleDeleteAllLines}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default List;
