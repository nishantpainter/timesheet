import React from "react";

const StoreContext = React.createContext({});

const StoreProvider = (props: any) => {
  const { children } = props;

  const value = React.useMemo(() => ({}), []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);

export default StoreProvider;
