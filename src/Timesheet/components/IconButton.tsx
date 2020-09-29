import React from "react";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";

import InfoIcon from "@material-ui/icons/Info";
import BrightnessIcon from "@material-ui/icons/Brightness6";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DeleteIcon from "@material-ui/icons/Delete";

const icons = {
  info: InfoIcon,
  brightness: BrightnessIcon,
  download: SaveAltIcon,
  delete: DeleteIcon,
};

type IconButtonProps = MuiIconButtonProps & { icon: keyof typeof icons };

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { icon, ...rest } = props;
  const Icon = icons[icon];

  return (
    <MuiIconButton size="small" {...rest}>
      <Icon />
    </MuiIconButton>
  );
};

export default IconButton;
