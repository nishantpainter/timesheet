import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButtonProps } from "@material-ui/core/IconButton";

import IconButton from "./IconButton";
import { DownloadExtension } from "../types";

type DownloadIconButtonProps = IconButtonProps & {
  onDownload: any;
};

const DownloadIconButton: React.FC<DownloadIconButtonProps> = (props) => {
  const { onDownload, ...rest } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDownloadTXT = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleCloseMenu();
    onDownload(DownloadExtension.TXT);
  };

  const handleDowloadCSV = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleCloseMenu();
    onDownload(DownloadExtension.CSV);
  };

  const handleDownloadPDF = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    handleCloseMenu();
    onDownload(DownloadExtension.PDF);
  };

  return (
    <>
      <IconButton
        icon="download"
        {...rest}
        onClick={handleOpenMenu}
      ></IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleDownloadTXT}>TXT File</MenuItem>
        <MenuItem onClick={handleDowloadCSV}>CSV File</MenuItem>
        <MenuItem onClick={handleDownloadPDF}>PDF File</MenuItem>
      </Menu>
    </>
  );
};

export default DownloadIconButton;
