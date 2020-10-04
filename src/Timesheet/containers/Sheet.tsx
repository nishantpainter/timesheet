import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import { useStore } from "../providers/StoreProvider";
import TimesheetLineInfo from "../components/TimesheetLineInfo";
import TimesheetLineList from "../components/TimesheetLineList";
import TimesheetLineControl from "../components/TimesheetLineControl";
import ImperativeTimeControl from "../components/ImperativeTimeControl";

type ListProps = {};

const List: React.FC<ListProps> = (props) => {
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
      <TimesheetLineControl
        onAdd={handleAddNewLine}
        onDelete={handleOpenConfirmationDialog}
      />
      <ImperativeTimeControl
        checked={imperative}
        onChange={handleChangeImperative}
      />
      <TimesheetLineInfo totalHours={totalHours} />
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
