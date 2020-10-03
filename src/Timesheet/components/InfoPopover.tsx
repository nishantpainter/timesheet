import React from "react";

import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Popover, {
  PopoverProps as InfoPopoverProps,
} from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popoverPaper: {
    width: 400,
    padding: theme.spacing(2),
  },
  link: {
    color: theme.palette.primary.main,
  },
  divider: {
    marginBottom: theme.spacing(),
  },
  check: {
    color: theme.palette.text.primary,
  },
}));

const Check = () => {
  const classes = useStyles();

  return (
    <span role="img" aria-label="check" className={classes.check}>
      ✅
    </span>
  );
};

const InfoPopover: React.FC<InfoPopoverProps> = (props) => {
  const { open, anchorEl, onClose } = props;

  const classes = useStyles();
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{
        className: classes.popoverPaper,
      }}
    >
      <Typography gutterBottom>
        Timesheet is a small application for managing daily task work time and
        to evaluate total hours of work.
      </Typography>
      <Divider className={classes.divider} light />
      <Typography color="secondary" gutterBottom>
        <Check />
        &nbsp;Hassle-free access to your work sheet lines
      </Typography>
      <Typography color="secondary" gutterBottom>
        <Check />
        &nbsp;Instant overview of total hours done
      </Typography>
      <Typography color="secondary" gutterBottom>
        <Check />
        &nbsp;Download timesheet in txt, pdf and csv format
      </Typography>
      <Divider className={classes.divider} light />
      <Typography gutterBottom>
        The application do not store any consumer data and use local storage
        for persisting the information. Timesheet is&nbsp;
        <Link
          color="primary"
          href="https://github.com/nishantpainter/timesheet"
          target="_blank"
        >
          Open-source
        </Link>
        . Pull request are welcome!
      </Typography>
      <Divider className={classes.divider} light />
      <Typography>
        Developed By :&nbsp;
        <Link
          color="primary"
          href="https://nishantpainter.github.io/"
          target="_blank"
        >
          Nishant Painter
        </Link>
      </Typography>
    </Popover>
  );
};

export default InfoPopover;
