import React from "react";
import { v4 as uuid } from "uuid";

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

  const handleAddNewLine = React.useCallback(() => {
    setLines((lines: Line[]) => [
      ...lines,
      { id: uuid(), title: "", hours: "" },
    ]);
  }, []);

  const handleDeleteAllLines = React.useCallback(() => {
    setLines([]);
  }, []);

  const handleDeleteLine = React.useCallback((event, line) => {
    setLines((lines) => lines.filter((l) => l.id !== line.id));
  }, []);

  const handleChangeLine = React.useCallback(
    (event, line) => {
      const { name, value } = event.target;

      const declarativeTimeRegex = /^\d*\.?[0-5]?((?<=[0-5])[0-9]?)?$/;
      const imperativeTimeRegex = /^\d*\.?\d*$/;

      const timeRegex = imperative ? imperativeTimeRegex : declarativeTimeRegex;

      if (name === "hours" && !timeRegex.test(value)) {
        return;
      }

      setLines((lines) => {
        return lines.map((l) =>
          l.id === line.id ? { ...line, [name]: value } : l
        );
      });
    },
    [imperative]
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
