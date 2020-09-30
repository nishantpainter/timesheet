import React from "react";
import { v4 as uuid } from "uuid";

import { Line } from "../types";
import StorageService from "../services/StorageService";

type StoreContextType = {
  lines: Line[];
  handleChangeLine: any;
  handleDeleteLine: any;
  handleDeleteAllLines: any;
  handleAddNewLine: any;
};

const defaultLines: Line[] = [];

const StoreContext = React.createContext<Partial<StoreContextType>>({});

const StoreProvider = (props: any) => {
  const { children } = props;
  const [lines, setLines] = React.useState(defaultLines);

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

  const handleDeleteAllLines = React.useCallback(() => {}, []);

  const handleDeleteLine = React.useCallback((event, line) => {
    setLines((lines) => lines.filter((l) => l.id !== line.id));
  }, []);

  const handleChangeLine = React.useCallback((event, line) => {
    const { name, value } = event.target;

    const declarativeTimeRegex = /^\d*\.?[0-5]?((?<=[0-5])[0-9]?)?$/;

    if (name === "hours" && !declarativeTimeRegex.test(value)) {
      return;
    }
    setLines((lines) => {
      return lines.map((l) =>
        l.id === line.id ? { ...line, [name]: value } : l
      );
    });
  }, []);

  React.useEffect(() => fetchLines(), []);

  const value = React.useMemo(
    () => ({
      lines,
      handleChangeLine,
      handleDeleteLine,
      handleDeleteAllLines,
      handleAddNewLine,
    }),
    [
      lines,
      handleChangeLine,
      handleDeleteLine,
      handleDeleteAllLines,
      handleAddNewLine,
    ]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);

export default StoreProvider;
