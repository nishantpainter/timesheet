import React from "react";
import moment from "moment";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import MuiToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import DownloadIconButton from "../components/DownloadIconButton";
import IconButton from "../components/IconButton";
import InfoPopover from "../components/InfoPopover";
import { useTheme } from "../providers/ThemeProvider";
import { DownloadExtension } from "../types";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    marginRight: theme.spacing(1),
  },
}));

type ToolbarProps = {};

const getDate = () => moment(new Date()).format("DD-MMM-YYYY HH:mm:ss");

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const classes = useStyles();
  const { handleToggleDarkTheme } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [date, setDate] = React.useState(getDate());

  const handleOpenInfo = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleCloseInfo = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleUpdateDate = React.useCallback(() => {
    setDate(getDate());
  }, []);

  const handleDownloadTxt = React.useCallback((lines) => {}, []);

  const handleDownloadCsv = React.useCallback((lines) => {}, []);

  const handleDownloadPdf = React.useCallback((lines) => {}, []);

  const handleDownload = React.useCallback(
    (fileType) => {
      switch (fileType) {
        case DownloadExtension.TXT:
          handleDownloadTxt([]);
          break;
        case DownloadExtension.CSV:
          handleDownloadCsv([]);
          break;
        case DownloadExtension.PDF:
          handleDownloadPdf([]);
          break;
        default:
          return;
      }
    },
    [handleDownloadTxt, handleDownloadCsv, handleDownloadPdf]
  );

  React.useEffect(() => {
    const interval = setInterval(handleUpdateDate, 1000);
    return () => clearInterval(interval);
  }, [handleUpdateDate]);

  return (
    <AppBar color="default">
      <MuiToolbar variant="dense">
        <Box display="flex" flexGrow={1} alignItems="center">
          <Typography color="primary">
            <b>TIMESHEET</b>
          </Typography>
          &nbsp;&nbsp;
          <Typography variant="body2">
            <b>{date}</b>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton
            icon="brightness"
            color="primary"
            className={classes.iconButton}
            onClick={handleToggleDarkTheme}
          />
          <DownloadIconButton
            color="primary"
            className={classes.iconButton}
            onDownload={handleDownload}
          />
          <IconButton icon="info" color="secondary" onClick={handleOpenInfo} />
        </Box>
        <InfoPopover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleCloseInfo}
        />
      </MuiToolbar>
    </AppBar>
  );
};

export default Toolbar;
