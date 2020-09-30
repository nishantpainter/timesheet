import React from "react";
import { SnackbarProvider as NotiStackProvider } from "notistack";

type SnackbarProviderProps = {};

const SnackbarProvider: React.FC<SnackbarProviderProps> = (props) => {
  const { children } = props;

  return (
    <NotiStackProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      {children}
    </NotiStackProvider>
  );
};

export default SnackbarProvider;
