import React from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  totalHours: {
    color: theme.palette.primary.main,
  },
}));

const getDate = () => moment(new Date()).format("DD-MMM-YYYY"); //HH:mm:ss

type TimesheetLineInfoProps = {
  totalHours: number;
};

const TimesheetLineInfo: React.FC<TimesheetLineInfoProps> = (props) => {
  const { totalHours } = props;

  const classes = useStyles();
  const [date] = React.useState(getDate());

  /*
  const handleUpdateDate = React.useCallback(() => {
    setDate(getDate());
  }, []);

  React.useEffect(() => {
    const interval = setInterval(handleUpdateDate, 1000);
    return () => clearInterval(interval);
  }, [handleUpdateDate]);
  */

  return (
    <Box
      display="flex"
      alignItems="center"
      height={32}
      padding={1.5}
      marginBottom={0.5}
      width="98%"
      justifyContent="space-between"
    >
      <Typography>
        <b>{date}</b>
      </Typography>
      &nbsp;&nbsp;
      <Typography>
        <b>
          Total Hours&nbsp;:&nbsp;
          <span className={classes.totalHours}>{totalHours.toFixed(2)}</span>
        </b>
      </Typography>
    </Box>
  );
};

export default TimesheetLineInfo;
