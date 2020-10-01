import React from "react";
import Button from "@material-ui/core/Button";
import { SnackbarProvider as NotiStackProvider } from "notistack";

type SnackbarProviderProps = {};

const SnackbarProvider: React.FC<SnackbarProviderProps> = (props) => {
  const { children } = props;

  const notistackRef: any = React.createRef();

  const onClickDismiss = (key: any) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <NotiStackProvider
      maxSnack={3}
      ref={notistackRef}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      action={(key) => (
        <Button color="inherit" size="small" onClick={onClickDismiss(key)}>
          Dismiss
        </Button>
      )}
    >
      {children}
    </NotiStackProvider>
  );
};

export default SnackbarProvider;
