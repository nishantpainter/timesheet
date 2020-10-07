import React from "react";
import { v4 as uuid } from "uuid";
import { useSnackbar } from "notistack";
import Button from "@material-ui/core/Button";

import { Line } from "../types";
import StorageService from "../services/StorageService";

type StoreContextType = {
  lines: Line[];
  imperative: boolean;
  handleChangeLine: any;
  handleDeleteLine: any;
  handleDeleteAllLines: any;
  handleAddNewLine: any;
  handleChangeImperative: any;
};

const defaultLines: Line[] = [];

const StoreContext = React.createContext<Partial<StoreContextType>>({});

const StoreProvider = (props: any) => {
  const { children } = props;

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [lines, setLines] = React.useState(defaultLines);
  const [imperative, setImperative] = React.useState(
    StorageService.getImperative()
  );

  const fetchLines = () => {
    const lines = StorageService.getLines();
    if (lines && lines.length) {
      setLines(lines);
    }
  };

  const handleUpdateStorageLines = React.useCallback((lines) => {
    StorageService.setLines(lines);
  }, []);

  const handleAddNewLine = React.useCallback(() => {
    setLines((lines: Line[]) => {
      const updatedLines = [...lines, { id: uuid(), title: "", hours: "" }];
      handleUpdateStorageLines(updatedLines);
      enqueueSnackbar("Line Added", { variant: "success" });
      return updatedLines;
    });
  }, [handleUpdateStorageLines, enqueueSnackbar]);

  const handleDeleteAllLines = React.useCallback(() => {
    setLines([]);
    handleUpdateStorageLines([]);
    enqueueSnackbar("All Line Deleted");
  }, [handleUpdateStorageLines, enqueueSnackbar]);

  const handleDeleteLine = React.useCallback(
    (event, line: Line) => {
      const action = (key: any) => (
        <>
          <Button
            color="secondary"
            size="small"
            onClick={() => {
              setLines((lines) => {
                const updatedLines = [...lines, line];
                handleUpdateStorageLines(updatedLines);
                return updatedLines;
              });
              closeSnackbar(key);
            }}
          >
            Undo
          </Button>
          <Button
            color="inherit"
            size="small"
            onClick={() => {
              closeSnackbar(key);
            }}
          >
            Dismiss
          </Button>
        </>
      );

      setLines((lines) => {
        const updatedLines = lines.filter((l) => l.id !== line.id);
        handleUpdateStorageLines(updatedLines);
        enqueueSnackbar("Line Deleted", {
          action,
        });
        return updatedLines;
      });
    },
    [handleUpdateStorageLines, enqueueSnackbar, closeSnackbar]
  );

  const handleChangeLine = React.useCallback(
    (event, line) => {
      const { name, value } = event.target;

      const declarativeTimeRegex = /(^\d*$)|(^\d*\.?$)|(^\d*\.[0-5]{1}$)|(^\d*\.[0-5]{1}[0-9]{1}$)/;

      // /^\d*\.?[0-5]?((?<=[0-5])[0-9]?)?$/; Look assertion not supported in safari

      const imperativeTimeRegex = /^\d*\.?\d*$/;

      const timeRegex = imperative ? imperativeTimeRegex : declarativeTimeRegex;

      if (name === "hours" && !timeRegex.test(value)) {
        return;
      }

      setLines((lines) => {
        const updatedLines = lines.map((l) =>
          l.id === line.id ? { ...line, [name]: value } : l
        );
        handleUpdateStorageLines(updatedLines);
        return updatedLines;
      });
    },
    [imperative, handleUpdateStorageLines]
  );

  const handleChangeImperative = React.useCallback((event) => {
    const { checked } = event.target;
    setImperative(checked);
    StorageService.setImperative(checked);
  }, []);

  React.useEffect(() => fetchLines(), []);

  const value = React.useMemo(
    () => ({
      lines,
      imperative,
      handleChangeLine,
      handleDeleteLine,
      handleDeleteAllLines,
      handleAddNewLine,
      handleChangeImperative,
    }),
    [
      lines,
      imperative,
      handleChangeLine,
      handleDeleteLine,
      handleDeleteAllLines,
      handleAddNewLine,
      handleChangeImperative,
    ]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);

export default StoreProvider;
