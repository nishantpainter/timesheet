import React from "react";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core";

import ImperativeTimeInfo from "./ImperativeTimeInfo";

const useStyles = makeStyles((theme) => ({
  imperativeFormControl: {
    marginRight: theme.spacing(0.5),
  },
}));

type ImperativeTimeControlProps = {
  checked: boolean | undefined;
  onChange: any;
};

const ImperativeTimeControl: React.FC<ImperativeTimeControlProps> = (props) => {
  const { checked, onChange } = props;

  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      height={32}
      marginBottom={1}
      padding={1.5}
    >
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={onChange} color="primary" />
        }
        classes={{ root: classes.imperativeFormControl }}
        label="Imperative Time"
      />
      &nbsp;
      <ImperativeTimeInfo />
    </Box>
  );
};

export default ImperativeTimeControl;
