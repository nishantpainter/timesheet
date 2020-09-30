import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import IconButton from "./IconButton";

type ImperativeTimeInfoProps = {};

const ImperativeTimeInfo: React.FC<ImperativeTimeInfoProps> = (props) => {
  return (
    <>
      <Tooltip title="1 hour = 1.00; 30 mins = 0.50; 15 mins = 0.25">
        <IconButton icon="question"></IconButton>
      </Tooltip>
    </>
  );
};

export default ImperativeTimeInfo;
