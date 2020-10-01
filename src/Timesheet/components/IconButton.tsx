import React from "react";
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from "@material-ui/core/IconButton";

import InfoIcon from "@material-ui/icons/Info";
import BrightnessIcon from "@material-ui/icons/Brightness6";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import HelpIcon from "@material-ui/icons/Help";
import AddIcon from "@material-ui/icons/Add";

const icons = {
  info: InfoIcon,
  brightness: BrightnessIcon,
  download: SaveAltIcon,
  delete: DeleteIcon,
  question: HelpIcon,
  add: AddIcon,
};

type IconButtonProps = MuiIconButtonProps & { icon: keyof typeof icons };

const IconButton: React.FC<IconButtonProps> = React.forwardRef((props, ref) => {
  const { icon, ...rest } = props;
  const Icon = icons[icon];

  return (
    <MuiIconButton size="small" ref={ref} {...rest}>
      <Icon />
    </MuiIconButton>
  );
});

export default IconButton;
