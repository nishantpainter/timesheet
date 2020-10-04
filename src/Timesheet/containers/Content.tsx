import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import Sheet from "./Sheet";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: theme.spacing(6),
  },
  main: {
    padding: theme.spacing(2),
    maxWidth: theme.spacing(70),
    marginRight: "auto",
    marginLeft: "auto",
    height: `calc(100% - ${theme.spacing(18)}px)`,
  },
}));

type ContentProps = {};

const Content: React.FC<ContentProps> = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.toolbar} />
      <Box component="main" className={classes.main}>
        <Sheet />
      </Box>
    </>
  );
};

export default Content;
